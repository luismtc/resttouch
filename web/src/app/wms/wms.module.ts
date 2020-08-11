import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';

import { MatKeyboardModule } from '@ngx-material-keyboard/core';
import { NgVirtualKeyboardModule }  from '@protacon/ng-virtual-keyboard';

import { WmsRoutingModule } from './wms-routing.module';
import { ListaProductoComponent } from './components/producto/lista-producto/lista-producto.component';
import { ListaIngresoComponent } from './components/ingreso/lista-ingreso/lista-ingreso.component';
import { FormIngresoComponent } from './components/ingreso/form-ingreso/form-ingreso.component';
import { IngresoComponent } from './components/ingreso/ingreso/ingreso.component';
import { ProductoComponent } from './components/producto/producto/producto.component';
import { FormProductoComponent } from './components/producto/form-producto/form-producto.component';
import { CategoriaProductoComponent } from './components/producto/categoria-producto/categoria-producto.component';
import { EgresoComponent } from './components/egreso/egreso/egreso.component';
import { ListaEgresoComponent } from './components/egreso/lista-egreso/lista-egreso.component';
import { FormEgresoComponent } from './components/egreso/form-egreso/form-egreso.component';
import { TransformacionComponent } from './components/transformacion/transformacion.component';

import { TransformacionService } from './services/transformacion.service';
import { ExistenciasComponent } from './components/reporte/existencias/existencias.component';
import { KardexComponent } from './components/reporte/kardex/kardex.component';
import { ListaProductoAltComponent } from './components/producto/lista-producto-alt/lista-producto-alt.component';

@NgModule({
  declarations: [ListaProductoComponent, ListaIngresoComponent, FormIngresoComponent, IngresoComponent, ProductoComponent, FormProductoComponent, CategoriaProductoComponent, EgresoComponent, ListaEgresoComponent, FormEgresoComponent, TransformacionComponent, ExistenciasComponent, KardexComponent, ListaProductoAltComponent],
  imports: [
    CommonModule,
    WmsRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatTabsModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    MatPaginatorModule,
    MatDialogModule,
    MatKeyboardModule,
    MatSidenavModule,
    MatTreeModule,
    NgVirtualKeyboardModule
  ],
  providers: [
    TransformacionService
  ],
  exports: [
    ListaProductoComponent, ListaProductoAltComponent
  ]
})
export class WmsModule { }
