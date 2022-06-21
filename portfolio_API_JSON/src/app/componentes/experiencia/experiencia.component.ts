import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { experiencia } from 'src/app/model/experiencia.model';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaList: any;
  constructor(private datosPortfolio: PortfolioService, public router: Router) { }

  ngOnInit(): void {
  this.datosPortfolio.obtenerDatos().subscribe(data => {
    console.log(data);
    this.experienciaList = data.experiencia;
  });

  }

  redirect() {
    this.router.navigate(['crear-experiencia']);  
  }
}
/*


  
  eliminarExp(id: number) {
    this.expService.eliminarExperiencia(id).subscribe(dato => {
      console.log(dato);
      this.router.navigate(['portfolio']);
    });
  }

  
  actualizarExperiencia(id: number) {
    this.router.navigate(['update-experiencia', id]);
  }*/