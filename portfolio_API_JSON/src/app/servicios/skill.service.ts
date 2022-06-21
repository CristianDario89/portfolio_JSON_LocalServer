import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';
import { environment } from '../../../src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class skillservice {
  /*URL: string = "http://localhost:8090/skill/"*/
  URL: string = environment.baseUrl;
  constructor(private http: HttpClient) { }


  obtenerDatos(): Observable<Skill> {

    return this.http.get<Skill>(this.URL + "skill/traer");

  }


  registrarSkill(Skill: Skill): Observable<Object> {

    return this.http.post<Skill>(this.URL + "skill/crear", Skill);

  }

  
 
  //este metodo sirve para obtener o buscar un empleado
  obtenerSkillPorId(id: number): Observable<Skill> {
    return this.http.get<Skill>(`${this.URL}skill/${id}`);
  }

  //este metodo sirve para actualizar el empleado
  actualizarSkill(id: number, skill: Skill): Observable<Object> {
    return this.http.put(`${this.URL}skill/actualizar/${id}`, skill);
  }

  eliminarSkill(id: number): Observable<Object> {
    return this.http.delete(`${this.URL}skill/borrar/${id}`);
  }
}
