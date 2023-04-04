import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnandaServiceService } from 'src/app/services/api/ananda-service.service';

@Component({
  selector: 'app-lista-verificadores-admin',
  templateUrl: './lista-verificadores-admin.component.html',
  styleUrls: ['./lista-verificadores-admin.component.css']
})
export class ListaVerificadoresAdminComponent implements OnInit{

  verificadores:any=[];
  verificador={
    nombreVerificador:'',
    claveVerificador:'',
    mesaVerificado:''
  }
  claveVerificador:any;

  constructor(private anandaService:AnandaServiceService,private modal:NgbModal){}

  ngOnInit(): void {
    this.anandaService.listaVerificadores().subscribe(
      (data) =>{
        this.verificadores = data;
      },
      (error) =>{
        console.log(error);
      }
    );
  }
  buscarSurtidorClick(){
    this.anandaService.obtenerVerificadorByClave(this.claveVerificador).subscribe(
      (data)=>{
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  crearSurtidorClick(){
    this.anandaService.crearVerificador(this.verificador).subscribe(
      (data)=>{
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  openCrearVerificador(crearVerificador){
    this.modal.open(crearVerificador);
  }
  openBuscarVerificador(buscarVerificador){
    this.modal.open(buscarVerificador);
  }
}
