import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill.model';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class skillsComponent implements OnInit {
  skillList: any;
  constructor(private datosPortfolio: PortfolioService, 
              public router: Router) { }

  ngOnInit(): void {
  this.datosPortfolio.obtenerDatos().subscribe(data => {
    console.log(data);
    this.skillList = data.skill;
  });

  }

  redirect() {
    this.router.navigate(['crear-skill']);  
  }

}

  /*


  
  eliminarHabilidad(id: number) {
    this.proyService.eliminarSkill(id).subscribe(dato => {
      //console.log(dato);
      this.router.navigate(['portfolio']);
    });
  }

  actualizarHabilidad(id: number) {
    this.router.navigate(['update-skill', id]);
  }*/ 