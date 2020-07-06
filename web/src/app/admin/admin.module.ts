import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTreeModule } from '@angular/material/tree';
import { MatDialogModule } from '@angular/material/dialog';

import { SidebarDirective } from './directives/sidebar.directive';
import { NgVirtualKeyboardModule } from '@protacon/ng-virtual-keyboard';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { ClockComponent } from './components/clock/clock.component';
import { MenuComponent } from './components/menu/menu.component';
import { UsuarioComponent } from './components/usuario/usuario/usuario.component';
import { ListaUsuarioComponent } from './components/usuario/lista-usuario/lista-usuario.component';
import { FormUsuarioComponent } from './components/usuario/form-usuario/form-usuario.component';
import { ClienteComponent } from './components/cliente/cliente/cliente.component';
import { ListaClienteComponent } from './components/cliente/lista-cliente/lista-cliente.component';
import { FormClienteComponent } from './components/cliente/form-cliente/form-cliente.component';
import { MedidaComponent } from './components/medida/medida/medida.component';
import { ListaMedidaComponent } from './components/medida/lista-medida/lista-medida.component';
import { FormMedidaComponent } from './components/medida/form-medida/form-medida.component';
import { PresentacionComponent } from './components/presentacion/presentacion/presentacion.component';
import { ListaPresentacionComponent } from './components/presentacion/lista-presentacion/lista-presentacion.component';
import { FormPresentacionComponent } from './components/presentacion/form-presentacion/form-presentacion.component';
import { FormClienteDialogComponent } from './components/cliente/form-cliente-dialog/form-cliente-dialog.component';
import { ImpresoraComponent } from './components/impresora/impresora/impresora.component';
import { FormImpresoraComponent } from './components/impresora/form-impresora/form-impresora.component';
import { ListaImpresoraComponent } from './components/impresora/lista-impresora/lista-impresora.component';
import { FpagoComponent } from './components/fpago/fpago/fpago.component';
import { FormPagoComponent } from './components/fpago/form-pago/form-pago.component';
import { ListaPagoComponent } from './components/fpago/lista-pago/lista-pago.component';
import { TipoUsuarioComponent } from './components/tipo-usuario/tipo-usuario/tipo-usuario.component';
import { ListaTipoUsuarioComponent } from './components/tipo-usuario/lista-tipo-usuario/lista-tipo-usuario.component';
import { FormTipoUsuarioComponent } from './components/tipo-usuario/form-tipo-usuario/form-tipo-usuario.component';
import { AccesoUsuarioComponent } from './components/acceso-usuario/acceso-usuario/acceso-usuario.component';
import { FormAccesoUsuarioComponent } from './components/acceso-usuario/form-acceso-usuario/form-acceso-usuario.component';
import { ListaAccesoUsuarioComponent } from './components/acceso-usuario/lista-acceso-usuario/lista-acceso-usuario.component';


@NgModule({
  declarations: [
    LoginComponent, DashboardComponent, HeaderComponent, ClockComponent, MenuComponent, SidebarDirective,
    UsuarioComponent, ListaUsuarioComponent, FormUsuarioComponent, ClienteComponent, ListaClienteComponent,
    FormClienteComponent, MedidaComponent, ListaMedidaComponent, FormMedidaComponent, PresentacionComponent,
    ListaPresentacionComponent, FormPresentacionComponent, FormClienteDialogComponent, ImpresoraComponent, FormImpresoraComponent, ListaImpresoraComponent, FpagoComponent, FormPagoComponent, ListaPagoComponent,TipoUsuarioComponent, ListaTipoUsuarioComponent, FormTipoUsuarioComponent, AccesoUsuarioComponent, FormAccesoUsuarioComponent, ListaAccesoUsuarioComponent
  ],
  entryComponents: [
    FormClienteComponent, FormClienteDialogComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatTabsModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    MatPaginatorModule,
    MatTreeModule,
    MatDialogModule,
    NgVirtualKeyboardModule
  ],
  exports: [
    HeaderComponent, MenuComponent, ListaClienteComponent, FormClienteComponent, FormClienteDialogComponent
  ]
})
export class AdminModule { }
