import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardService as AuthGuard } from '../admin/services/authguard.service';

import { OrdenCompraComponent } from './components/orden-compra/orden-compra/orden-compra.component';

const routes: Routes = [
  { path: 'ordcomp', component: OrdenCompraComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/admin/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdenCompraRoutingModule { }
