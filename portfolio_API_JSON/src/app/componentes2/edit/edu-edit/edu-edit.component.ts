import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { EducacionService } from 'src/app/servicios/educacion.service';
import { educacion } from 'src/app/model/educacion.model';
@Component({
  selector: 'app-edu-edit',
  templateUrl: './edu-edit.component.html',
  styleUrls: ['./edu-edit.component.css']
})
export class EduEditComponent implements OnInit {
  id!:number;
  educacion : educacion = new educacion("","","","","");

  constructor(public educacionService: EducacionService,
              public router: Router,
              private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.educacionService.obtenerEducacionPorId(this.id).subscribe(dato =>{
      this.educacion = dato;
    },error => console.log(error));
  } 

  
  irAlPortfolio(){
    this.router.navigate(['portfolio']);
  /*  swal('Empleado actualizado',`El empleado ${this.empleado.nombre} ha sido actualizado con exito`,`success`);
  */}

  onSubmit(){
    this.educacionService.actualizarEducacion(this.id,this.educacion).subscribe(dato => {
      this.irAlPortfolio();
    },error => console.log(error));
  }
}
