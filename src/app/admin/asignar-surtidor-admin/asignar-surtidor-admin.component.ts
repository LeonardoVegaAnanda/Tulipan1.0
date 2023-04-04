import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnandaServiceService } from 'src/app/services/api/ananda-service.service';

@Component({
  selector: 'app-asignar-surtidor-admin',
  templateUrl: './asignar-surtidor-admin.component.html',
  styleUrls: ['./asignar-surtidor-admin.component.css']
})
export class AsignarSurtidorAdminComponent implements OnInit{

  picking?:any;
  id:any;
  ordenVenta?:any;
  claveSurtidor:any;
  surtidores:any=[];
  surtidoresEstado:Array<any>=[];

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
    this.anandaService.listaSurtidores().subscribe(
      (data) =>{
        this.surtidores = data;
        for(let surtidorBD of this.surtidores){
          if(surtidorBD.estadoSurtidor != 'Ocupado'){
            this.surtidoresEstado.push(surtidorBD);
          }
        } 
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  asignarSurtidor(){
    console.log(this.claveSurtidor);
    console.log(this.ordenVenta?.ordenVenta.idOrdenVenta);
    this.anandaService.asignarSurtidor(this.claveSurtidor,this.ordenVenta?.ordenVenta.idOrdenVenta).subscribe(
      (data) =>{
        console.log(data);
      },
      (error) =>{
        console.log(error);
      }
    );
  }

}
