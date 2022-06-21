import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacion } from '../model/educacion.model';
import { environment } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<educacion> {

    return this.http.get<educacion>(this.URL + "educacion/traer");

  }

  registrarEducacion(educacion: educacion): Observable<Object> {

    return this.http.post<educacion>(this.URL + "educacion/crear", educacion);

  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerEducacionPorId(id: number): Observable<educacion> {
    return this.http.get<educacion>(`${this.URL}educacion/${id}`);
  }
  //este metodo sirve para actualizar el empleado
  actualizarEducacion(id: number, educacion: educacion): Observable<Object> {
    return this.http.put(`${this.URL}educacion/actualizar/${id}`, educacion);
  }

  eliminarEducacion(id: number): Observable<Object> {
    return this.http.delete(`${this.URL}educacion/borrar/${id}`);
  }
}
