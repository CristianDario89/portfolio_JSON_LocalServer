import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { skillservice } from 'src/app/servicios/skill.service';
import { Skill } from 'src/app/model/skill.model';
@Component({
  selector: 'app-skill-edit',
  templateUrl: './skill-edit.component.html',
  styleUrls: ['./skill-edit.component.css']
})
export class SkillEditComponent implements OnInit {
  id!:number;
  habilidad: any = new Skill("","");
  constructor(public skillservice: skillservice,
    public router: Router,
    private route:ActivatedRoute ) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.skillservice.obtenerSkillPorId(this.id).subscribe(dato =>{
        this.habilidad = dato;
      },error => console.log(error));
    } 
  
    
    irAlPortfolio(){ this.router.navigate(['portfolio']);}
  
    onSubmit(){
      this.skillservice.actualizarSkill(this.id,this.habilidad).subscribe(dato => {
        this.irAlPortfolio();
      },error => console.log(error));
    }
  }
  