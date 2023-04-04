import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnandaServiceService } from 'src/app/services/api/ananda-service.service';

@Component({
  selector: 'app-detalles-surtidor-admin',
  templateUrl: './detalles-surtidor-admin.component.html',
  styleUrls: ['./detalles-surtidor-admin.component.css']
})
export class DetallesSurtidorAdminComponent implements OnInit{

  surtidor?:any;
  idSurtidor:any;

  constructor(private anandaService:AnandaServiceService,private route:ActivatedRoute,private modal:NgbModal,private router:Router){}

  ngOnInit(): void {
    this.idSurtidor = this.route.snapshot.params['id'];
    this.anandaService.obtenerSurtidorById(this.idSurtidor).subscribe(
      (data) =>{
        this.surtidor = data;
      },
      (error) =>{
        console.log(error);
      }
    );
  }
  editarSurtidorClick(){
    this.anandaService.actualizarSurtidor(this.surtidor).subscribe(
      (data) =>{
        console.log(data);
      },
      (error) =>{
        console.log(error);
      }
    );
  }
  openEditarSurtidor(ediatrSurtidor){
    this.modal.open(ediatrSurtidor);
  }
  eliminarSurtidor(idSurtidor){
    this.anandaService.eliminarSurtidor(idSurtidor).subscribe(
      (data)=>{
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    );
    console.log("Eliminado Correcto");
    this.router.navigate(['/admin/surtidor']);
  }
}
