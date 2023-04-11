import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.css']
})
export class SidebarAdminComponent {


    constructor(private loginService:LoginService, private router:Router){}
    
    cerrarSesion(){
      this.loginService.logout();
      this.router.navigate(['/']);
    }
} 
