import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { DetallesPickingAdminComponent } from './admin/detalles-picking-admin/detalles-picking-admin.component';
import { DetallesRegistrosAdminComponent } from './admin/detalles-registros-admin/detalles-registros-admin.component';
import { ListaItemsAdminComponent } from './admin/lista-items-admin/lista-items-admin.component';
import { ListaOrdenesAdminComponent } from './admin/lista-ordenes-admin/lista-ordenes-admin.component';
import { ListaPickingAdminComponent } from './admin/lista-picking-admin/lista-picking-admin.component';
import { ListaRegistrosAdminComponent } from './admin/lista-registros-admin/lista-registros-admin.component';
import { ListaSurtidoresAdminComponent } from './admin/lista-surtidores-admin/lista-surtidores-admin.component';
import { ListaVerificadoresAdminComponent } from './admin/lista-verificadores-admin/lista-verificadores-admin.component';;
import { DetallesOrdenAdminComponent } from './admin/detalles-orden-admin/detalles-orden-admin.component';
import { DetallesVerificadorAdminComponent } from './admin/detalles-verificador-admin/detalles-verificador-admin.component';
import { DetallesSurtidorAdminComponent } from './admin/detalles-surtidor-admin/detalles-surtidor-admin.component';
import { DashboardLoginComponent } from './login/dashboard-login/dashboard-login.component';
import { LoginAdminComponent } from './login/login-admin/login-admin.component';
import { AsignarSurtidorAdminComponent } from './admin/asignar-surtidor-admin/asignar-surtidor-admin.component';
import { AsignarVerificadorAdminComponent } from './admin/asignar-verificador-admin/asignar-verificador-admin.component';
import { DashboardUserComponent } from './user/dashboard-user/dashboard-user.component';
import { AdminGuard } from './services/guards/admin/admin.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AccionesPickingUserComponent } from './user/acciones-picking-user/acciones-picking-user.component';

const routes: Routes = [
  {path:'',component:DashboardLoginComponent},
  {path:'login',component:LoginAdminComponent,pathMatch:'full'},
  {path:'usuario',component:DashboardUserComponent},
  {path:'acciones/:id',component:AccionesPickingUserComponent},
  {path:'forbidden',component:ForbiddenComponent},
  {path:'admin',component:DashboardAdminComponent,canActivate:[AdminGuard],children:[
    {path:'registro',component:ListaRegistrosAdminComponent},
    {path:'registro/:id',component:DetallesRegistrosAdminComponent},
    {path:'picking',component:ListaPickingAdminComponent},
    {path:'picking/:id',component:DetallesPickingAdminComponent},
    {path:'assign-s/:id',component:AsignarSurtidorAdminComponent},
    {path:'assign-v/:id',component:AsignarVerificadorAdminComponent},
    {path:'orden',component:ListaOrdenesAdminComponent},
    {path:'orden/:id',component:DetallesOrdenAdminComponent},
    {path:'items',component:ListaItemsAdminComponent},
    {path:'verificador',component:ListaVerificadoresAdminComponent},
    {path:'verificador/:id',component:DetallesVerificadorAdminComponent},
    {path:'surtidor',component:ListaSurtidoresAdminComponent},
    {path:'surtidor/:id',component:DetallesSurtidorAdminComponent}
  ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
