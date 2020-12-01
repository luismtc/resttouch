import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardService as AuthGuard } from './services/authguard.service';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsuarioComponent } from './components/usuario/usuario/usuario.component';
import { ClienteComponent } from './components/cliente/cliente/cliente.component';
import { MedidaComponent } from './components/medida/medida/medida.component';
import { PresentacionComponent } from './components/presentacion/presentacion/presentacion.component';
import { ImpresoraComponent } from './components/impresora/impresora/impresora.component';
import { FpagoComponent } from './components/fpago/fpago/fpago.component';
import { TipoUsuarioComponent } from './components/tipo-usuario/tipo-usuario/tipo-usuario.component';
import { AccesoUsuarioComponent } from './components/acceso-usuario/acceso-usuario/acceso-usuario.component';
import { TableroComponent } from './components/tablero/tablero.component';
import { ProveedorComponent } from './components/proveedor/proveedor/proveedor.component';
import { ImpuestoEspecialComponent } from './components/impuestoEspecial/impuesto-especial/impuesto-especial.component';
import { BodegaComponent } from './components/bodega/bodega/bodega.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuard]},
  {path: 'cliente', component: ClienteComponent, canActivate: [AuthGuard]},
  {path: 'medida', component: MedidaComponent, canActivate: [AuthGuard]},
  {path: 'presentacion', component: PresentacionComponent, canActivate: [AuthGuard]},
  {path: 'impresora', component: ImpresoraComponent, canActivate: [AuthGuard]},
  {path: 'formapago', component: FpagoComponent, canActivate: [AuthGuard]},
  {path: 'tipo_usuario', component: TipoUsuarioComponent, canActivate: [AuthGuard]},
  {path: 'acceso', component: AccesoUsuarioComponent, canActivate: [AuthGuard]},
  {path: 'tablero', component: TableroComponent, canActivate: [AuthGuard]},
  {path: 'proveedor', component: ProveedorComponent, canActivate: [AuthGuard]},
  {path: 'impuesto_especial', component: ImpuestoEspecialComponent, canActivate: [AuthGuard]},
  {path: 'bodega', component: BodegaComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
