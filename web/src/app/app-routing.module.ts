import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'admin', loadChildren:'./admin/admin.module#AdminModule' },
  { path: 'restaurante', loadChildren:'./restaurante/restaurante.module#RestauranteModule' },
  { path: 'wms', loadChildren:'./wms/wms.module#WmsModule' },
  { path: 'ordcomp', loadChildren:'./orden-compra/orden-compra.module#OrdenCompraModule' },
  { path: '', redirectTo: 'admin/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
