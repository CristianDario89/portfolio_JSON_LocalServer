import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../model/experiencia.model';
import { environment } from '../../../src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class ExperienciaService {
  /*URL: string = "http://localhost:8090/experiencia/"*/

  URL: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<experiencia> {
    return this.http.get<experiencia>(this.URL + "experiencia/traer");
}

  registrarExperiencia(experiencia: experiencia): Observable<Object> {
    return this.http.post<experiencia>(this.URL + "experiencia/crear", experiencia);
  }

  
  //este metodo sirve para obtener o buscar un empleado
  obtenerExperienciaPorId(id: number): Observable<experiencia> {
    return this.http.get<experiencia>(`${this.URL}experiencia/${id}`);
  }

  //este metodo sirve para actualizar el empleado
  actualizarExperiencia(id: number, educacion: experiencia): Observable<Object> {
    return this.http.put(`${this.URL}experiencia/actualizar/${id}`, educacion);
  }

  eliminarExperiencia(id: number): Observable<Object> {
    return this.http.delete(`${this.URL}experiencia/borrar/${id}`);
  }

 
}
