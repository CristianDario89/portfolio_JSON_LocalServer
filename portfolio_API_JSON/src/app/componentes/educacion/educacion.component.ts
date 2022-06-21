import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { educacion } from 'src/app/model/educacion.model';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacionList: any;

  constructor(private datosPortfolio: PortfolioService, public router: Router) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.educacionList = data.educacion;
    });

  }

  redirect() {
    this.router.navigate(['crear-educacion']);  
  }
}
/*
  ngOnInit(): void {
    this.obtenerEducacion();
  }

  obtenerEducacion() {
    this.educacionService.obtenerDatos().subscribe(data => {//metodo q escuche siempre  q el observable haga un cambio
      this.educacionList = data;
    });
  }
  actualizarEducacion(id: number) {
    this.router.navigate(['update-educacion', id]);
  }

  eliminarEducacion(id: number) {
    this.educacionService.eliminarEducacion(id).subscribe(dato => {
     
      this.volverAlPortfolio();
    });
  }
  volverAlPortfolio() {
    this.router.navigate(['portfolio']);
  }
 */
