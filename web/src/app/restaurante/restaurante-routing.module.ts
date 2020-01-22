import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardService as AuthGuard } from '../admin/services/authguard.service';

import { AreaComponent } from './components/area/area/area.component';
import { TranAreasComponent } from './components/tran-areas/tran-areas.component';

const routes: Routes = [
  { path: 'mantareas', component: AreaComponent, canActivate: [AuthGuard] },
  { path: 'tranareas', component: TranAreasComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestauranteRoutingModule { }
