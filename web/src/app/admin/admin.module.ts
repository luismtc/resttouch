import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
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

import { SidebarDirective } from './directives/sidebar.directive';

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



@NgModule({
  declarations: [
    LoginComponent, DashboardComponent, HeaderComponent, ClockComponent, MenuComponent, SidebarDirective, UsuarioComponent, ListaUsuarioComponent, FormUsuarioComponent, ClienteComponent, ListaClienteComponent, FormClienteComponent
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
    MatPaginatorModule
  ],
  exports: [
    HeaderComponent, MenuComponent
  ]
})
export class AdminModule { }
