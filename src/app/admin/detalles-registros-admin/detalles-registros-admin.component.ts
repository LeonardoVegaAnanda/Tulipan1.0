import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnandaServiceService } from 'src/app/services/api/ananda-service.service';

@Component({
  selector: 'app-detalles-registros-admin',
  templateUrl: './detalles-registros-admin.component.html',
  styleUrls: ['./detalles-registros-admin.component.css']
})
export class DetallesRegistrosAdminComponent implements OnInit {

  registro?: any;
  id:any;
  surtidor?:any;
  verificador?:any;

  constructor(private andService:AnandaServiceService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.andService.obtenerRegistroById(this.id).subscribe(
      (data) =>{
        this.registro = data;
        console.log(this.registro.ordenVenta);
        this.andService.buscarSurtidorPorOrden(this.registro.ordenVenta.idOrdenVenta).subscribe(
          (data)=>{
            console.log(data);
            this.surtidor= data;
          }
        );
        this.andService.buscarVerificadorPorOrden(this.registro.ordenVenta.idOrdenVenta).subscribe(
          (data)=>{
            console.log(data);
            this.verificador=data;
          },
          (error)=>{
            console.log(error);
          }
        );
      },
      (error) =>{
        console.log(error);
      }
    );
  }

}
