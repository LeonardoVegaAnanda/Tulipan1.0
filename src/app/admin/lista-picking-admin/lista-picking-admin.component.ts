import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AnandaServiceService } from 'src/app/services/api/ananda-service.service';
import Swal from 'sweetalert2';
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
    Swal.fire({
      icon:'question',
      title:'Buscar Lista Picking',
      text:'¿Desea buscar el picking con la fecha: '+this.fecha,
      showCancelButton:true,
      confirmButtonColor:'#3CC3C8',
      cancelButtonColor:'#d33',
      confirmButtonText:'Buscar',
      cancelButtonText:'Cancelar'
    }).then(
      (e)=>{
        if(e.isConfirmed){
          this.andService.listaPickingDia(latest_date).subscribe(
            (data:any) =>{
              Swal.fire('Picking','La lista fue traida correctamente','success');
              this.listapicking = data;
            },
            (error)=>{
              Swal.fire('Error',"Error al buscar la lista",'error');
            }
          );
        }
      }
    );


  }
  

}
