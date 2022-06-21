import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { proyecto } from 'src/app/model/proyecto.model';
@Component({
  selector: 'app-proy-crear',
  templateUrl: './proy-crear.component.html',
  styleUrls: ['./proy-crear.component.css']
})
export class ProyCrearComponent implements OnInit {
  proyecto: any = new proyecto("","","","","");
  constructor(public ProyectoService: ProyectoService,
              public router: Router) { }

  ngOnInit(): void {
  }

  guardarProyecto(){
    this.ProyectoService.registrarProyecto(this.proyecto).subscribe(data=>{ 
      console.log("proyecto AGREGADO: "+ JSON.stringify(data));
      this.volverAlPortfolio();
    }, error => console.log(error)); 
  }

  volverAlPortfolio(){
    this.router.navigate(['portfolio']);
  }
  onSubmit(){
    console.log(this.proyecto);
    this.guardarProyecto();
  }
}
