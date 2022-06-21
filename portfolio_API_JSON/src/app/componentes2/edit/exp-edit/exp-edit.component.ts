import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { experiencia } from 'src/app/model/experiencia.model';
@Component({
  selector: 'app-exp-edit',
  templateUrl: './exp-edit.component.html',
  styleUrls: ['./exp-edit.component.css']
})
export class ExpEditComponent implements OnInit {
  id!:number;
  experiencia : experiencia = new experiencia("","","","","");
  constructor(public experienciaService: ExperienciaService,
              public router: Router,
              private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.experienciaService.obtenerExperienciaPorId(this.id).subscribe(dato =>{
      this.experiencia = dato;
    },error => console.log(error));
  } 

  
  irAlPortfolio(){
    this.router.navigate(['portfolio']);
  /*  swal('Empleado actualizado',`El empleado ${this.empleado.nombre} ha sido actualizado con exito`,`success`);
  */}

  onSubmit(){
    this.experienciaService.actualizarExperiencia(this.id,this.experiencia).subscribe(dato => {
      this.irAlPortfolio();
    },error => console.log(error));
  }
}
