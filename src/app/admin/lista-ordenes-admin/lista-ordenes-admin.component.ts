import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnandaServiceService } from 'src/app/services/api/ananda-service.service';

@Component({
  selector: 'app-lista-ordenes-admin',
  templateUrl: './lista-ordenes-admin.component.html',
  styleUrls: ['./lista-ordenes-admin.component.css']
})
export class ListaOrdenesAdminComponent implements OnInit{
  docNum:any;
  ordenes:any=[];
  orden:any;
  validado:boolean=false;

  constructor(private anandaService:AnandaServiceService,private modal:NgbModal){}

  ngOnInit(): void {
    this.anandaService.listaOrdenes().subscribe(
      (data)=>{
        this.ordenes=data;
        console.log(this.ordenes);
      }
    );
  }
  buscarOrdenDocNum(){
    console.log(this.docNum);
    this.anandaService.obtenerOrdenBydocNum(this.docNum).subscribe(
      (data)=>{
        console.log(data);
        this.orden =data;
        this.modal.dismissAll();
      },
      (error) =>{
        console.log(error);
      }
    );
  }

  openModal(buscarOrden){
    this.modal.open(buscarOrden);
  }

}
