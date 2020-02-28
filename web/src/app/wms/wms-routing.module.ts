import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardService as AuthGuard } from '../admin/services/authguard.service';

import { IngresoComponent } from './components/ingreso/ingreso/ingreso.component';
import { EgresoComponent } from './components/egreso/egreso/egreso.component';
import { ProductoComponent } from './components/producto/producto/producto.component';
import { TransformacionComponent } from './components/transformacion/transformacion.component';

const routes: Routes = [
  { path: 'ingresos', component: IngresoComponent, canActivate: [AuthGuard] },
  { path: 'egresos', component: EgresoComponent, canActivate: [AuthGuard] },
  { path: 'articulos', component: ProductoComponent, canActivate: [AuthGuard] },
  { path: 'transformaciones', component: TransformacionComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WmsRoutingModule { }
