import { Component, OnInit, Input } from '@angular/core';

const infoMesaTest = {
  area: 'Area 01',
  noMesa: 1,
  cuentas: [
    { numero: 1, nombre: 'Juan' },
    { numero: 2, nombre: 'Pedro' },
    { numero: 3, nombre: 'Pablo' }
  ]
};

interface productoSelected {
  id: number;
  nombre: string;
  noCuenta?: number;
  cantidad: number;
  impreso: boolean;
}

@Component({
  selector: 'app-tran-comanda',
  templateUrl: './tran-comanda.component.html',
  styleUrls: ['./tran-comanda.component.css']
})
export class TranComandaComponent implements OnInit {

  @Input() mesaEnUso: any;
  private lstProductosSeleccionados: productoSelected[];
  private lstProductosDeCuenta: productoSelected[];
  private cuentaSeleccionada: string = null;
  private noCuentaSeleccionada: number = null;

  constructor() { }

  ngOnInit() {
    this.mesaEnUso = infoMesaTest;
    this.resetLstProductosSeleccionados();
    this.resetLstProductosDeCuenta();
  }

  resetLstProductosSeleccionados = () => this.lstProductosSeleccionados = [];
  resetLstProductosDeCuenta = () => this.lstProductosDeCuenta = [];

  setSelectedCuenta(noCuenta: number) {
    const ctaSel = this.mesaEnUso.cuentas.find((c: any) => c.numero === noCuenta);
    this.cuentaSeleccionada = ctaSel.nombre;
    this.noCuentaSeleccionada = noCuenta;
    this.setLstProductosDeCuenta();
  }

  setLstProductosDeCuenta() {
    this.lstProductosDeCuenta = this.lstProductosSeleccionados.filter(p => p.noCuenta == this.noCuentaSeleccionada);
  }

  addProductoSelected(producto: any) {
    if (this.noCuentaSeleccionada) {
      const idx = this.lstProductosSeleccionados.findIndex(p => p.id == producto.id && p.noCuenta == this.noCuentaSeleccionada && p.impreso == false);

      if (idx < 0) {
        this.lstProductosSeleccionados.push({ id: producto.id, nombre: producto.nombre, noCuenta: this.noCuentaSeleccionada, cantidad: 1, impreso: false });
      } else {
        this.lstProductosSeleccionados[idx].cantidad++;
      }

      this.setLstProductosDeCuenta();
    }
  }

  updProductosCuenta(nvaLista: productoSelected[] = []) {
    let lstTemp: productoSelected[] = this.lstProductosSeleccionados.filter(p => p.noCuenta != this.noCuentaSeleccionada);
    if (nvaLista.length > 0) {
      this.lstProductosSeleccionados = lstTemp.concat(nvaLista);
    } else {
      this.lstProductosSeleccionados = lstTemp;
    }
  }

  printComanda() {
    const productosAImprimir = this.lstProductosDeCuenta.filter(p => !p.impreso);
    console.log('Imprimiendo...', productosAImprimir);
    this.lstProductosDeCuenta.map(p => p.impreso = true);
  }

  printCuenta() {
    console.log(`Imprimiendo cuenta de ${this.cuentaSeleccionada}`, this.lstProductosDeCuenta.filter(p => p.impreso));
  }

}
