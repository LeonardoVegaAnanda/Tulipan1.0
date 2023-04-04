import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AnandaServiceService } from 'src/app/services/api/ananda-service.service';

@Component({
  selector: 'app-lista-picking-admin',
  templateUrl: './lista-picking-admin.component.html',
  styleUrls: ['./lista-picking-admin.component.css']
})
export class ListaPickingAdminComponent implements OnInit{
  fecha=new Date();
  
  listapicking:any=[];
  constructor(private datepipe:DatePipe,private andService:AnandaServiceService){}
  ngOnInit(): void {
    let latest_date =this.datepipe.transform('2022-10-20', 'yyyy-MM-dd');
    this.andService.listaPickingDia(latest_date).subscribe(
      (data) =>{
        this.listapicking = data;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  obtenerPicking(){
    let latest_date =this.datepipe.transform(this.fecha, 'yyyy-MM-dd');
    this.andService.listaPickingDia(latest_date).subscribe(
      (data:any) =>{
        this.listapicking = data;
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  

}
