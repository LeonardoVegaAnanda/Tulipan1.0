import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AnandaServiceService } from 'src/app/services/api/ananda-service.service';

@Component({
  selector: 'app-detalles-orden-admin',
  templateUrl: './detalles-orden-admin.component.html',
  styleUrls: ['./detalles-orden-admin.component.css']
})
export class DetallesOrdenAdminComponent implements OnInit{
  id = 0;
  orden?: any;
  validacion: boolean = false;
  itemCode: any;
  imagen?:any;
  itemTraido?:any;

  constructor(private router: Router, private route: ActivatedRoute, private anandaservice: AnandaServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.anandaservice.obtenerOrdenById(this.id).subscribe(
      (data) => {
        this.orden = data;
        console.log(this.orden);
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
