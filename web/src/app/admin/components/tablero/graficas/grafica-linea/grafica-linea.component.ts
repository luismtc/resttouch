import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-linea',
  templateUrl: './grafica-linea.component.html',
  styleUrls: ['./grafica-linea.component.css']
})
export class GraficaLineaComponent implements OnInit {

  @Input() lineChartData: ChartDataSets[] = [];
  @Input() lineChartLabels: Label[] = [];
  @Input() lineChartColors: Color[] = [];
  @Input() titulo = '';

  lineChartOptions: ChartOptions = {
    responsive: true,
    title: {
      text: this.titulo,
      display: true,
      position: 'chartArea'
    }
  };
  lineChartLegend = true;
  lineChartPlugins = [];

  constructor() { }

  ngOnInit(): void { }

}
