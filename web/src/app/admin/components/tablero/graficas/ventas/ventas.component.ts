import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficas-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  @Input() datos: any = {};

  public xAxisPorDia: any;
  public yAxisPorDia: any;
  public chartTitlePorDia: string;
  public legendPorDia: any;
  public markerSettingsPorDia: any;
  public toolTipSettingsPorDia: any;

  public xAxisPorCategoria: any;
  public yAxisPorCategoria: any;
  public chartTitlePorCategoria: string;
  public legendPorCategoria: any;
  public markerSettingsPorCategoria: any;
  public toolTipSettingsPorCategoria: any;

  public xAxisPorTurno: any;
  public yAxisPorTurno: any;
  public chartTitlePorTurno: string;
  public legendPorTurno: any;
  public markerSettingsPorTurno: any;
  public toolTipSettingsPorTurno: any;

  public xAxisPorMesero: any;
  public yAxisPorMesero: any;
  public chartTitlePorMesero: string;
  public legendPorMesero: any;
  public markerSettingsPorMesero: any;
  public toolTipSettingsPorMesero: any;

  constructor() { }

  ngOnInit() {
    console.log('DATOS = ', this.datos);
    this.setGraficaPorDia();
    this.setGraficaPorCategoria();
    this.setGraficaPorTurno();
    this.setGraficaPorMesero();
  }

  setGraficaPorDia = () => {
    this.chartTitlePorDia = 'Ventas por día';

    this.toolTipSettingsPorDia = {
      enable: true
    };

    this.markerSettingsPorDia = {
      visible: true,
      dataLabel: {
        visible: true
      }
    };

    this.legendPorDia = {
      visible: true
    };

    this.xAxisPorDia = {
      title: 'Día',
      valueType: 'Category',
      labelIntersectAction: 'Rotate90'
    };

    this.yAxisPorDia = {
      title: 'Ventas'
    };
  }

  setGraficaPorCategoria = () => {
    this.chartTitlePorCategoria = 'Ventas por categoria';

    this.toolTipSettingsPorCategoria = {
      enable: true
    };

    this.markerSettingsPorCategoria = {
      visible: true,
      dataLabel: {
        visible: true
      }
    };

    this.legendPorCategoria = {
      visible: true
    };

    this.xAxisPorCategoria = {
      title: 'Categoría',
      valueType: 'Category',
      labelIntersectAction: 'Rotate90'
    };

    this.yAxisPorCategoria = {
      title: 'Ventas'
    };
  }

  setGraficaPorTurno = () => {
    this.chartTitlePorTurno = 'Ventas por turno';

    this.toolTipSettingsPorTurno = {
      enable: true
    };

    this.markerSettingsPorTurno = {
      visible: true,
      dataLabel: {
        visible: true
      }
    };

    this.legendPorTurno = {
      visible: true
    };

    this.xAxisPorTurno = {
      title: 'Turno',
      valueType: 'Category',
      labelIntersectAction: 'Rotate90'
    };

    this.yAxisPorTurno = {
      title: 'Ventas'
    };
  }

  setGraficaPorMesero = () => {
    this.chartTitlePorMesero = 'Ventas por mesero';

    this.toolTipSettingsPorMesero = {
      enable: true
    };

    this.markerSettingsPorMesero = {
      visible: true,
      dataLabel: {
        visible: true
      }
    };

    this.legendPorMesero = {
      visible: true
    };

    this.xAxisPorMesero = {
      title: 'Mesero',
      valueType: 'Category',
      labelIntersectAction: 'Rotate90'
    };

    this.yAxisPorMesero = {
      title: 'Ventas'
    };
  }

}
