import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PortfolioComponent } from "./componentes/portfolio/portfolio.component";
import { IniciarSesionComponent } from "./componentes/iniciar-sesion/iniciar-sesion.component";

import { EduEditComponent } from "./componentes2/edit/edu-edit/edu-edit.component";
import { ExpEditComponent } from "./componentes2/edit/exp-edit/exp-edit.component";
import { ProyEditComponent } from "./componentes2/edit/proy-edit/proy-edit.component";
import { SkillEditComponent } from "./componentes2/edit/skill-edit/skill-edit.component";

import { EduCrearComponent } from "./componentes2/crear/edu-crear/edu-crear.component";
import { ExpCrearComponent } from "./componentes2/crear/exp-crear/exp-crear.component";
import { ProyCrearComponent } from "./componentes2/crear/proy-crear/proy-crear.component";
import { SkillCrearComponent } from "./componentes2/crear/skill-crear/skill-crear.component";

import { AuthGuard } from './servicios/auth.guard';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent},
  /*{path:'portfolio', component:PortfolioComponent, canActivate:[GuardGuard]},*/
  {path:'iniciar-sesion', component:IniciarSesionComponent},

  {path:'update-educacion/:id', component:EduEditComponent},
  {path:'update-experiencia/:id', component:ExpEditComponent},
  {path:'update-proyecto/:id', component:ProyEditComponent},
  {path:'update-skill/:id', component:SkillEditComponent},

  {path:'crear-educacion', component:EduCrearComponent},
  {path:'crear-experiencia', component:ExpCrearComponent},
  {path:'crear-proyecto', component:ProyCrearComponent},
  {path:'crear-skill', component:SkillCrearComponent},

  {path:'', redirectTo:'iniciar-sesion',pathMatch:'full'}
]; 

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }
