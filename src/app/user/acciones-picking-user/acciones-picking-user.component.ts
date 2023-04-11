import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnandaServiceService } from 'src/app/services/api/ananda-service.service';

@Component({
  selector: 'app-acciones-picking-user',
  templateUrl: './acciones-picking-user.component.html',
  styleUrls: ['./acciones-picking-user.component.css']
})
export class AccionesPickingUserComponent implements OnInit {

  id: any;
  registro?: any;
  docNum:any;

  constructor(private anandaService: AnandaServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.anandaService.obtenerRegistroById(this.id).subscribe(
      (data) => {
        this.registro = data;
        this.docNum= this.registro.ordenVenta.docNum;
        console.log(this.docNum);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  generarTiempoInicioSurtido() {
    console.log(this.docNum);
    this.anandaService.generarTiempoInicioSurtido(this.id,this.docNum).subscribe(    
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  generarTiempoTerminoSurtido() {
    this.anandaService.generarTiempoTerminoSurtido(this.id,this.docNum).subscribe(
      (data)=>{
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  generarTiempoInicioVerificado() {
    this.anandaService.generarTiempoInicioVerificado(this.id,this.docNum).subscribe(
      (data)=>{
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    );
    }
  generarTiempoTerminoVerificado() {
      this.anandaService.generarTiempoTerminoVerificado(this.id,this.docNum).subscribe(
        (data)=>{
          console.log(data);
        }
      );
  }

}
