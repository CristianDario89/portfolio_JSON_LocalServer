import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url = "http://localhost:4200/iniciar-sesion";
  currenUserSubject: BehaviorSubject<any>; //guarda los estados


  constructor(private http: HttpClient) {
    console.log("El servicio de autenticacion corriendo bro");
    this.currenUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
  }


  IniciarSesion(credenciales: any): Observable<any> {
    return this.http.post(this.url, credenciales).pipe(map(data => {
      sessionStorage.setItem('currentUser', JSON.stringify(data))
      this.currenUserSubject.next(data);
      return data;
    }));
  }

  get UsuarioAutenticado() {
    return this.currenUserSubject.value;
  }
}
