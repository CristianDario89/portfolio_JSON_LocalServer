import { Component, OnInit } from '@angular/core';
import { proyecto } from 'src/app/model/proyecto.model';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectoList: any;
  constructor(private datosPortfolio: PortfolioService, 
    public router: Router) { }

  ngOnInit(): void {
  this.datosPortfolio.obtenerDatos().subscribe(data => {
    console.log(data);
    this.proyectoList = data.proyecto;
  });

  }

  redirect() {
    this.router.navigate(['crear-proyecto']);  
  }
}
  /*


  
  eliminarPro(id: number) {
    this.ProyectoService.eliminarProyecto(id).subscribe(dato => {
      console.log(dato);
      this.router.navigate(['portfolio']);
    });
  }

  actualizarProyecto(id: number) {
    this.router.navigate(['update-proyecto', id]);
  }*/ 
