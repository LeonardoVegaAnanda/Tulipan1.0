import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnandaServiceService } from 'src/app/services/api/ananda-service.service';

@Component({
  selector: 'app-asignar-verificador-admin',
  templateUrl: './asignar-verificador-admin.component.html',
  styleUrls: ['./asignar-verificador-admin.component.css']
})
export class AsignarVerificadorAdminComponent implements OnInit{
  picking?:any;
  id:any;
  ordenVenta?:any;
  claveVerificado:any;
  verificadores:any=[];
  verificadorEstado:Array<any>=[];

  constructor(private anandaService:AnandaServiceService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.anandaService.obtenerPickingById(this.id).subscribe(
      (data) =>{
        this.picking = data;

        this.anandaService.obtenerPickingByAbsEntry(this.picking.absEntry).subscribe(
          (data)=>{
            this.ordenVenta = data;
          },
          (error) =>{
            console.log(error);
          }
        );
      },
      (error)=>{
        console.log(error);
      } 
    );
    this.anandaService.listaVerificadores().subscribe(
      (data) =>{
        this.verificadores = data;
        for(let verificadorBD of this.verificadores){
          if(verificadorBD.estadoVerificador != 'Ocupado'){
            this.verificadorEstado.push(verificadorBD);
          }
        } 
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  asignarVerificador(){
    console.log(this.claveVerificado);
    console.log(this.ordenVenta?.ordenVenta.idOrdenVenta);
    this.anandaService.asignarVerificador(this.claveVerificado,this.ordenVenta?.ordenVenta.idOrdenVenta).subscribe(
      (data) =>{
        console.log(data);
      },
      (error) =>{
        console.log(error);
      }
    );
  }
}
