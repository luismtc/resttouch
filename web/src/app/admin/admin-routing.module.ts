import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardService as AuthGuard } from './services/authguard.service';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsuarioComponent } from './components/usuario/usuario/usuario.component';
import { ClienteComponent } from './components/cliente/cliente/cliente.component';
import { MedidaComponent } from './components/medida/medida/medida.component';
import { PropinaComponent } from './components/propina/propina/propina.component';
import { PresentacionComponent } from './components/presentacion/presentacion/presentacion.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuard]},
  {path: 'cliente', component: ClienteComponent, canActivate: [AuthGuard]},
  {path: 'medida', component: MedidaComponent, canActivate: [AuthGuard]},
  {path: 'presentacion', component: PresentacionComponent, canActivate: [AuthGuard]},
  {path: 'propina', component: PropinaComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
