import { Component, OnInit } from '@angular/core';
import { AnandaServiceService } from 'src/app/services/api/ananda-service.service';

@Component({
  selector: 'app-lista-items-admin',
  templateUrl: './lista-items-admin.component.html',
  styleUrls: ['./lista-items-admin.component.css']
})
export class ListaItemsAdminComponent implements OnInit{

  items:any=[];

  constructor(private anandaService:AnandaServiceService){}

  ngOnInit(): void {
    this.anandaService.listaItems().subscribe(
      (data) =>{
        this.items = data;
      },
      (error)=>{
        console.log(error)
      }
    );
  }

}
