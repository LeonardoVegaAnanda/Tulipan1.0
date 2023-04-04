import { Component, OnInit } from "@angular/core";
import { NgModel } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AnandaServiceService } from "src/app/services/api/ananda-service.service";

@Component({
  selector: 'app-lista-registros-admin',
  templateUrl: './lista-registros-admin.component.html',
  styleUrls: ['./lista-registros-admin.component.css']
})
export class ListaRegistrosAdminComponent implements OnInit{
  fecha = new Date();
  registros:any=[];

  constructor(private anandaService:AnandaServiceService){}

  ngOnInit(): void {
    this.anandaService.listaRegistros().subscribe(
      (data)=>{
        this.registros = data;
      },
      (error)=>{
        console.log(error);
      }
    );
  }






}
