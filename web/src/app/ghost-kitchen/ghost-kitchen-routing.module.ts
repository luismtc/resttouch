import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService as AuthGuard } from '../admin/services/authguard.service';

import {SeguimientoComponent } from './components/seguimiento/seguimiento.component';
import { DistribucionPropinasComponent } from './components/reporte/distribucion-propinas/distribucion-propinas.component';

const routes: Routes = [
  { path: 'seguimiento', component: SeguimientoComponent, canActivate: [AuthGuard] },
  { path: 'repdistprop', component: DistribucionPropinasComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GhostKitchenRoutingModule { }
