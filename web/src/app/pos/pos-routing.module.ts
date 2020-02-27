import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardService as AuthGuard } from '../admin/services/authguard.service';

import { FormaPagoComponent } from './components/formaPago/forma-pago/forma-pago.component';
import { FacturaManualComponent } from './components/facturaManual/factura-manual/factura-manual.component';

const routes: Routes = [
  { path: 'fpago', component: FormaPagoComponent, canActivate: [AuthGuard] },
  { path: 'factman', component: FacturaManualComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosRoutingModule { }
