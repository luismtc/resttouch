import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardService as AuthGuard } from '../admin/services/authguard.service';

import { TranAreasComponent } from './components/tran-areas/tran-areas.component';

const routes: Routes = [
  { path: 'tranareas', component: TranAreasComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestauranteRoutingModule { }
