import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardService as AuthGuard } from '../admin/services/authguard.service';

import { IngresoComponent } from './components/ingreso/ingreso/ingreso.component';
import { EgresoComponent } from './components/egreso/egreso/egreso.component';
import { ProductoComponent } from './components/producto/producto/producto.component';
import { TransformacionComponent } from './components/transformacion/transformacion.component';
import { ExistenciasComponent } from './components/reporte/existencias/existencias.component';
import { KardexComponent } from './components/reporte/kardex/kardex.component';
import { ProduccionComponent } from './components/produccion/produccion.component';
import { ValorizadoComponent } from './components/reporte/valorizado/valorizado.component'
import { FisicoComponent } from './components/fisico/fisico/fisico.component'

const routes: Routes = [
  { path: 'ingresos', component: IngresoComponent, canActivate: [AuthGuard] },
  { path: 'egresos', component: EgresoComponent, canActivate: [AuthGuard] },
  { path: 'articulos', component: ProductoComponent, canActivate: [AuthGuard] },
  { path: 'transformaciones', component: TransformacionComponent, canActivate: [AuthGuard] },
  { path: 'rptexistencia', component: ExistenciasComponent, canActivate: [AuthGuard] },
  { path: 'rptkardex', component: KardexComponent, canActivate: [AuthGuard] },
  { path: 'produccion', component: ProduccionComponent, canActivate: [AuthGuard] },
  { path: 'rptvalorizado', component: ValorizadoComponent, canActivate: [AuthGuard] },
  { path: 'fisico', component: FisicoComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/admin/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WmsRoutingModule { }
