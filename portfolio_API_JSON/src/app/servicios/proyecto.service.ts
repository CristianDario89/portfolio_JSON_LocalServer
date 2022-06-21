import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyecto } from '../model/proyecto.model';
import { environment } from '../../../src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  URL: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<proyecto> {

    return this.http.get<proyecto>(this.URL + "proyecto/traer");

  }

  registrarProyecto(proyecto: proyecto): Observable<Object> {

    return this.http.post<proyecto>(this.URL + "proyecto/crear", proyecto);

  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerProyectoPorId(id: number): Observable<proyecto> {
    return this.http.get<proyecto>(`${this.URL}proyecto/${id}`);
  }

  //este metodo sirve para actualizar el empleado
  actualizarProyecto(id: number, proyecto: proyecto): Observable<Object> {
    return this.http.put(`${this.URL}proyecto/actualizar/${id}`, proyecto);
  }

  eliminarProyecto(id: number): Observable<Object> {
    return this.http.delete(`${this.URL}proyecto/borrar/${id}`);
  }

}
