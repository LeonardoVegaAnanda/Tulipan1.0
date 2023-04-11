import { Component, OnInit } from '@angular/core';
import { AnandaServiceService } from 'src/app/services/api/ananda-service.service';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit{

  lista:boolean=false;
  nombreG:any;
  claveV:any;
  claveS:any;
  id:any;
  surtidor?:any;
  verificador?:any;
  ordenes:any=[];
  validacionTS:boolean=false;
  validacionTV:boolean=false;

  verificadoPositivo:boolean=false;
  surtidorPositivo:boolean =false;
  constructor(private anandaService:AnandaServiceService){}

  ngOnInit(): void {
    this.lista = false;
  }
  buscarSurtidor(){
    this.anandaService.buscarSurtidorPorClave(this.claveS).subscribe(
      (data)=>{
        console.log(data);
        this.lista = true
        this.surtidor=data;
        this.id= this.surtidor.idSurtidor;
        this.anandaService.listaOrdenesSurtidor(this.id).subscribe(
          (data) =>{
            this.ordenes = data;
            this.validacionTS=true;
            this.validacionTV=false;
          },
          (error)=>{
            console.log(error);
          }
        );
      }
    );
  }
  buscarVerificador(){
    this.anandaService.buscarVerificadorPorOrden(this.claveV).subscribe(
      (data)=>{
        console.log(data);
        this.lista = true
        this.verificador=data;
        this.id= this.verificador.idVerificador;
        this.validacionTV=true;
        this.validacionTS=false;
      }
    );
  }
  estado_surtidor(){
    this.verificadoPositivo=false;
    this.surtidorPositivo=true;
  }

  estado_verificador(){
    this.surtidorPositivo=false;
    this.verificadoPositivo=true;
  }
}
