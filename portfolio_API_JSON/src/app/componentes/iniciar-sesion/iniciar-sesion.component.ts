import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';
import { LoginService } from 'src/app/servicios/login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
public form!:FormGroup;
users:any= [];
   constructor( private loginService: LoginService,
                private formBuilder: FormBuilder,
                private ruta: Router,
                private http: HttpClient) {}

  ngOnInit(): void {

   this.form = this.formBuilder.group({
      userId:['', Validators.required],
      password:['', Validators.required],
    });

    this.loginService.getUser().subscribe((data:any)=>{
      console.log(data);
      this.users = data;
    })
  }

  userLogin(data:any) {
  
      if(data.userId) {
         this.users.forEach((item:any) => {
           
          if(item.userId === data.userId && item.password === data.password){
            alert("login exitoso bro");
            
            localStorage.setItem("isLoggedIn","true");
            this.form.reset();
            this.ruta.navigate(['portfolio'])
          }else{
            console.log('usuario INvalido bro');
            localStorage.clear();
          }

         });
      }else{
        alert("no funca pa");
      }
   
  
  }

 
  /*
   get Email(){
     return this.form.get('email');
   }
 
   get Password(){
     return this.form.get('password');
   }
  
   */

}
