import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnandaServiceService } from 'src/app/services/api/ananda-service.service';

@Component({
  selector: 'app-lista-surtidores-admin',
  templateUrl: './lista-surtidores-admin.component.html',
  styleUrls: ['./lista-surtidores-admin.component.css']
})
export class ListaSurtidoresAdminComponent implements OnInit{

  surtidor={
    nombreSurtidor:'',
    claveSurtidor:''
  }
  claveSurtidor:any;
  surtidores:any=[];
  constructor(private anandaService:AnandaServiceService,private modal:NgbModal){}


  ngOnInit(): void {
    this.anandaService.listaSurtidores().subscribe(
      (data)=>{
        this.surtidores = data;
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  openCrearSurtidor(crearSurtidor){
    this.modal.open(crearSurtidor);
  }
  openBuscarSurtidor(buscarSurtidor){
    this.modal.open(buscarSurtidor);
  }
  crearSurtidorClick(){
    this.anandaService.crearSurtidor(this.surtidor).subscribe(
      (data) =>{
        console.log(data);
        this.modal.dismissAll();
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  buscarSurtidorClick(){
    this.anandaService.obtenerSurtidorByClave(this.claveSurtidor).subscribe(
      (data) =>{
        console.log(data);
      },
      (error) =>{
        console.log(error);
      }
    );
  }
}
