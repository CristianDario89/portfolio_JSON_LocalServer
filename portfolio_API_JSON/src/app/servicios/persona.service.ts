import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL: string = "http://localhost:8090/personas/"
  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<persona> {

    return this.http.get<persona>(this.URL + "traer/perfil");

  }
}
