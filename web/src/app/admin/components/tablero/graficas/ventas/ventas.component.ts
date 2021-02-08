import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-graficas-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VentasComponent implements OnInit {

  @Input() datos: any = {};

  /*public xAxisPorDia: any;
  public yAxisPorDia: any;
  public chartTitlePorDia: string;
  public legendPorDia: any;
  public markerSettingsPorDia: any;
  public toolTipSettingsPorDia: any;*/

  /*public xAxisPorCategoria: any;
  public yAxisPorCategoria: any;
  public chartTitlePorCategoria: string;
  public legendPorCategoria: any;
  public markerSettingsPorCategoria: any;
  public toolTipSettingsPorCategoria: any;*/

  /*public xAxisPorTurno: any;
  public yAxisPorTurno: any;
  public chartTitlePorTurno: string;
  public legendPorTurno: any;
  public markerSettingsPorTurno: any;
  public toolTipSettingsPorTurno: any;*/

  /*public xAxisPorMesero: any;
  public yAxisPorMesero: any;
  public chartTitlePorMesero: string;
  public legendPorMesero: any;
  public markerSettingsPorMesero: any;
  public toolTipSettingsPorMesero: any;*/

  dsPorDia: ChartDataSets[] = [];
  lblsPorDia: string[] = [];

  dsPorCategoria: ChartDataSets[] = [];
  lblsPorCategoria: string[] = [];

  dsPorTurno: ChartDataSets[] = [];
  lblsPorTurno: string[] = [];

  dsPorMesero: ChartDataSets[] = [];
  lblsPorMesero: string[] = [];

  constructor() { }

  ngOnInit() {
    /*console.log('DATOS = ', this.datos);
    this.setGraficaPorDia();
    this.setGraficaPorCategoria();
    this.setGraficaPorTurno();
    this.setGraficaPorMesero();*/
  }

  setGraficas = () => {
    this.setGraficaPorDia();
    this.setGraficaPorCategoria();
    this.setGraficaPorTurno();
    this.setGraficaPorMesero();
  }

  setGraficaPorDia = () => {
    /*this.chartTitlePorDia = 'Ventas por día';
    this.toolTipSettingsPorDia = { enable: true };
    this.markerSettingsPorDia = { visible: true, dataLabel: { visible: true } };
    this.legendPorDia = { visible: true };
    this.xAxisPorDia = { title: 'Día', valueType: 'Category', labelIntersectAction: 'Rotate90' };
    this.yAxisPorDia = { title: 'Ventas' };*/
    this.dsPorDia = [];
    this.lblsPorDia = [];
    if (this.datos.porDia) {
      this.datos.porDia.forEach((pd: any) => {
        const dataPorDia: number[] = [];
        pd.datos.forEach((d: any) => {
          dataPorDia.push(+d.venta);
          const idx = this.lblsPorDia.indexOf(d.fecha);
          if (idx < 0) {
            this.lblsPorDia.push(d.fecha);
          }
        });

        this.dsPorDia.push(
          {
            data: dataPorDia,
            label: pd.nombre
          }
        );
      });
    }
  }

  setGraficaPorCategoria = () => {
    /*this.chartTitlePorCategoria = 'Ventas por categoria';
    this.toolTipSettingsPorCategoria = { enable: true };
    this.markerSettingsPorCategoria = { visible: true, dataLabel: { visible: true } };
    this.legendPorCategoria = { visible: true };
    this.xAxisPorCategoria = { title: 'Categoría', valueType: 'Category', labelIntersectAction: 'Rotate90' };
    this.yAxisPorCategoria = { title: 'Ventas' };*/
    this.dsPorCategoria = [];
    this.lblsPorCategoria = [];
    if (this.datos.porCategoria) {
      this.datos.porCategoria.forEach((pd: any) => {
        const data: number[] = [];
        pd.datos.forEach((d: any) => {
          data.push(+d.venta);
          const idx = this.lblsPorCategoria.indexOf(d.categoria);
          if (idx < 0) {
            this.lblsPorCategoria.push(d.categoria);
          }
        });

        this.dsPorCategoria.push(
          {
            data,
            label: pd.nombre
          }
        );
      });
    }
  }

  setGraficaPorTurno = () => {
    /*this.chartTitlePorTurno = 'Ventas por turno';
    this.toolTipSettingsPorTurno = { enable: true };
    this.markerSettingsPorTurno = { visible: true, dataLabel: { visible: true } };
    this.legendPorTurno = { visible: true };
    this.xAxisPorTurno = { title: 'Turno', valueType: 'Category', labelIntersectAction: 'Rotate90' };
    this.yAxisPorTurno = { title: 'Ventas' };*/
    this.dsPorTurno = [];
    this.lblsPorTurno = [];
    if (this.datos.porTurno) {
      this.datos.porTurno.forEach((pd: any) => {
        const data: number[] = [];
        pd.datos.forEach((d: any) => {
          data.push(+d.venta);
          const idx = this.lblsPorTurno.indexOf(d.turno);
          if (idx < 0) {
            this.lblsPorTurno.push(d.turno);
          }
        });

        this.dsPorTurno.push(
          {
            data,
            label: pd.nombre
          }
        );
      });
    }
  }

  setGraficaPorMesero = () => {
    /*this.chartTitlePorMesero = 'Ventas por mesero';
    this.toolTipSettingsPorMesero = { enable: true };
    this.markerSettingsPorMesero = { visible: true, dataLabel: { visible: true } };
    this.legendPorMesero = { visible: true };
    this.xAxisPorMesero = { title: 'Mesero', valueType: 'Category', labelIntersectAction: 'Rotate90' };
    this.yAxisPorMesero = { title: 'Ventas' };*/
    this.dsPorMesero = [];
    this.lblsPorMesero = [];
    if (this.datos.porMesero) {
      this.datos.porMesero.forEach((pd: any) => {
        const data: number[] = [];
        pd.datos.forEach((d: any) => {
          data.push(+d.venta);
          const idx = this.lblsPorMesero.indexOf(d.mesero);
          if (idx < 0) {
            this.lblsPorMesero.push(d.mesero);
          }
        });

        this.dsPorMesero.push(
          {
            data,
            label: pd.nombre
          }
        );
      });
    }
  }

}
