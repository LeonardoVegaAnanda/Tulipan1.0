import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnandaServiceService } from 'src/app/services/api/ananda-service.service';

@Component({
  selector: 'app-detalles-picking-admin',
  templateUrl: './detalles-picking-admin.component.html',
  styleUrls: ['./detalles-picking-admin.component.css']
})
export class DetallesPickingAdminComponent implements OnInit {
  id = 0;
  picking?: any;
  validacion: boolean = false;
  itemCode: any;
  imagen?:any;
  itemTraido?:any;

  constructor(private router: Router, private route: ActivatedRoute, private anandaservice: AnandaServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.anandaservice.obtenerPickingById(this.id).subscribe(
      (data) => {
        this.picking = data;
        console.log(this.picking);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  validado() {
    this.validacion = true;
  }
  obtenerFoto(itemCode: any) {
    console.log(itemCode);
    this.imagen = "http://104.36.166.251:5757/fotos_productos/" + itemCode + ".jpg";
    this.validacion = true;
    this.anandaservice.obtenerItemByItemCode(itemCode).subscribe(
      (data)=>{
        this.itemTraido=data;
      },
      (error)=>{
        console.log(error);
      }
    );
    return this.validacion;
  }

}
