import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { ListaPickingAdminComponent } from './admin/lista-picking-admin/lista-picking-admin.component';
import { DetallesPickingAdminComponent } from './admin/detalles-picking-admin/detalles-picking-admin.component';
import { ListaOrdenesAdminComponent } from './admin/lista-ordenes-admin/lista-ordenes-admin.component';
import { ListaItemsAdminComponent } from './admin/lista-items-admin/lista-items-admin.component';
import { DetallesOrdenAdminComponent } from './admin/detalles-orden-admin/detalles-orden-admin.component';
import { DashboardLoginComponent } from './login/dashboard-login/dashboard-login.component';
import { LoginAdminComponent } from './login/login-admin/login-admin.component';
import { NavbarLoginComponent } from './login/navbar-login/navbar-login.component';
import { AccionesPickingUserComponent } from './user/acciones-picking-user/acciones-picking-user.component';
import { SidebarAdminComponent } from './admin/sidebar-admin/sidebar-admin.component';
import { ListaRegistrosAdminComponent } from './admin/lista-registros-admin/lista-registros-admin.component';
import { DetallesRegistrosAdminComponent } from './admin/detalles-registros-admin/detalles-registros-admin.component';
import { ListaVerificadoresAdminComponent } from './admin/lista-verificadores-admin/lista-verificadores-admin.component';
import { ListaSurtidoresAdminComponent } from './admin/lista-surtidores-admin/lista-surtidores-admin.component';
import { DetallesSurtidorAdminComponent } from './admin/detalles-surtidor-admin/detalles-surtidor-admin.component';
import { DetallesVerificadorAdminComponent } from './admin/detalles-verificador-admin/detalles-verificador-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AsignarSurtidorAdminComponent } from './admin/asignar-surtidor-admin/asignar-surtidor-admin.component';
import { AsignarVerificadorAdminComponent } from './admin/asignar-verificador-admin/asignar-verificador-admin.component';
import { DashboardUserComponent } from './user/dashboard-user/dashboard-user.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { authInterceptorProviders } from './services/util/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DashboardAdminComponent,
    ListaPickingAdminComponent,
    DetallesPickingAdminComponent,
    ListaOrdenesAdminComponent,
    ListaItemsAdminComponent,
    DetallesOrdenAdminComponent,
    AccionesPickingUserComponent, 
    SidebarAdminComponent,
    ListaRegistrosAdminComponent,
    DetallesRegistrosAdminComponent,
    ListaVerificadoresAdminComponent,
    ListaSurtidoresAdminComponent,
    DetallesSurtidorAdminComponent,
    DetallesVerificadorAdminComponent,
    AsignarSurtidorAdminComponent,
    AsignarVerificadorAdminComponent,
    NavbarLoginComponent,
    DashboardLoginComponent,
    LoginAdminComponent,
    DashboardUserComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    DatePipe,
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
