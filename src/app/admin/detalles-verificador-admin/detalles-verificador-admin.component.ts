import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnandaServiceService } from 'src/app/services/api/ananda-service.service';

@Component({
  selector: 'app-detalles-verificador-admin',
  templateUrl: './detalles-verificador-admin.component.html',
  styleUrls: ['./detalles-verificador-admin.component.css']
})
export class DetallesVerificadorAdminComponent implements OnInit{

  verificador?:any;
  idVerificador:any;

  constructor(private anandaService:AnandaServiceService,private route:ActivatedRoute,private modal:NgbModal, private router:Router){}

  ngOnInit(): void {
    this.idVerificador = this.route.snapshot.params['id'];
    this.anandaService.obtenerVerificadorById(this.idVerificador).subscribe(
      (data) =>{
        this.verificador = data;
      },
      (error) =>{
        console.log(error);
      }
    );
  }
  editarVerificadorClick(){
    this.anandaService.actualizarVerificador(this.verificador).subscribe(
      (data)=>{
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  eliminarVerificador(idVerificador){
    this.anandaService.eliminarVerificador(idVerificador).subscribe(
      (data)=>{
        console.log(data);
        this.router.navigate(['admin/verificador']);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  openEditarVerificador(editarVerificador){
    this.modal.open(editarVerificador);
  }
}
