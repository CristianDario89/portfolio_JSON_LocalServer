import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  /* url:string="http://localhost:8090/portfolio/"*/
  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {//para q los componentes/clientes q se suscriban puedan recibir los datos
    return this.http.get('./assets/data/data.json');//list para q el componente se suscriba
    /*return this.http.get(this.url+"persona");*/
  }
}
