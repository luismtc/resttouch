import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService as AuthGuard } from '../admin/services/authguard.service';

import {SeguimientoComponent } from './components/seguimiento/seguimiento.component';

const routes: Routes = [
  { path: 'seguimiento', component: SeguimientoComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GhostKitchenRoutingModule { }
