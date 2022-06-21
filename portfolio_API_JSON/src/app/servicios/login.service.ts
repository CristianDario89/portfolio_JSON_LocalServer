import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL: string = "http://localhost:3000/user"
  constructor(private http: HttpClient) { }
/*
  getUser(user: User): Observable<object> {
    console.log(user);
    return this.http.post(this.URL, user);
  }*/
  getUser(){
  
    return this.http.get(this.URL);
  }

}
