import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { proyecto } from 'src/app/model/proyecto.model';
@Component({
  selector: 'app-proy-edit',
  templateUrl: './proy-edit.component.html',
  styleUrls: ['./proy-edit.component.css']
})
export class ProyEditComponent implements OnInit {
  id!:number;
  proyecto: any = new proyecto("", "", "", "", "");
  constructor(public ProyectoService: ProyectoService,
    public router: Router,
    private route:ActivatedRoute ) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.ProyectoService.obtenerProyectoPorId(this.id).subscribe(dato =>{
        this.proyecto = dato;
      },error => console.log(error));
    } 
  
    
    irAlPortfolio(){this.router.navigate(['portfolio']);}
  
    onSubmit(){
      this.ProyectoService.actualizarProyecto(this.id,this.proyecto).subscribe(dato => {
        this.irAlPortfolio();
      },error => console.log(error));
    }
  }
  