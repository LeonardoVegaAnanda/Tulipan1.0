import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnandaServiceService } from 'src/app/services/api/ananda-service.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit{
  loginForm = {
    "username": '',
    "password": ''
  }
  //Constructor
  constructor(private login: LoginService, private router: Router) { }

  ngOnInit(): void {}

  //Metodo para ingresar al dashboard corresponiente
  loginSubmit() {
    if (this.loginForm.username.trim() == '' || this.loginForm.username.trim() == null) {
      return;
    }
    if (this.loginForm.password.trim() == '' || this.loginForm.password.trim() == null) {
      return;
    }
    console.log(this.loginForm);
    //Conexion al service login
    this.login.loginToken(this.loginForm).subscribe(
      (data: any) => {
        console.log(data);
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user: any) => {
            console.log(user);
            this.login.setUser(user);
            //Verificacion de Roles
            if (this.login.getUserRoles() == "ROLE_ADMIN") {
              this.router.navigate(['admin']);
            }
            else{
              this.login.logout();
            }
          }
        )
      },
      (error) => {
        console.log(error);
       
      }
    )
}
}
