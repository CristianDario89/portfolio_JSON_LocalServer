import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { skillsComponent } from './componentes/skills/skills.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortfolioService } from './servicios/portfolio.service';
import { InterceptorService } from './servicios/interceptor.service';
import { ModalComponent } from './componentes/modal/modal.component';
import { EduEditComponent } from './componentes2/edit/edu-edit/edu-edit.component';
import { EduCrearComponent } from './componentes2/crear/edu-crear/edu-crear.component';
import { ExpCrearComponent } from './componentes2/crear/exp-crear/exp-crear.component';
import { ProyCrearComponent } from './componentes2/crear/proy-crear/proy-crear.component';
import { SkillCrearComponent } from './componentes2/crear/skill-crear/skill-crear.component';
import { ProyEditComponent } from './componentes2/edit/proy-edit/proy-edit.component';
import { ExpEditComponent } from './componentes2/edit/exp-edit/exp-edit.component';
import { SkillEditComponent } from './componentes2/edit/skill-edit/skill-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercadeComponent,
    EducacionComponent,
    ExperienciaComponent,
    skillsComponent,
    ProyectoComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    ModalComponent,
    EduEditComponent,
    EduCrearComponent,
    ExpCrearComponent,
    ProyCrearComponent,
    SkillCrearComponent,
    ProyEditComponent,
    ExpEditComponent,
    SkillEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule, 
    NgCircleProgressModule.forRoot({})
  ],
  providers: [PortfolioService,
    {provide: HTTP_INTERCEPTORS, useClass:InterceptorService, multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
