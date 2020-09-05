import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PivotViewComponent, IDataOptions, IDataSet, FieldListService, PivotView } from '@syncfusion/ej2-angular-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { TableroService } from '../../services/tablero.service';
import * as moment from 'moment';
import { GLOBAL } from '../../../shared/global';

@Component({
    selector: 'app-tablero',
    providers: [FieldListService],
    templateUrl: './tablero.component.html',
    styleUrls: ['./tablero.component.css']
})

export class TableroComponent implements OnInit {
    public pivotData: IDataSet[];
    public dataSourceSettings: IDataOptions;
    public button: Button;

    public params: any = {};
    public titulo = 'Tablero';
    public estDias = 0;
    public estMin = '';
    public estMax = '';
    public estMedia = '';
    public estTotal = '';
    public cargando = false;
    public datosGraficas: any = {};

    @ViewChild('pivotview', { static: false })
    public pivotGridObj: PivotViewComponent;

    constructor(
        private snackBar: MatSnackBar,
        private tableroService: TableroService
    ) { }

    ngOnInit(): void {
        this.dataSourceSettings = {
            dataSource: this.pivotData,
            expandAll: false,
            columns: [
                { name: 'dia', caption: 'Día' }
            ],
            values: [{ name: 'total', caption: 'Monto' }],
            rows: [
                { name: 'grupo', caption: 'Grupo' },
                { name: 'descripcion', caption: 'Producto' }
            ],
            formatSettings: [{
                name: 'total',
                format: 'N2'
            }],
            filters: [],
            valueSortSettings: { headerText: 'Monto', headerDelimiter: '##', sortOrder: 'Descending' }
        };

        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#export');

        this.button.element.onclick = (): void => {
            this.pivotGridObj.excelExport();
        };
        this.loadDataGraficas();
    }

    onSubmit() {
        this.cargando = true;
        this.tableroService.getTableroDatos(this.params).subscribe(res => {
            if (res.exito) {
                this.pivotGridObj.engineModule.fieldList = {};
                this.pivotGridObj.dataSourceSettings.dataSource = res.datos;

                this.estDias = res.cantidad;
                this.estMin = res.min;
                this.estMax = res.max;
                this.estMedia = res.media;
                this.estTotal = res.total;
            } else {
                this.snackBar.open('No se pudo generar el reporte...', this.titulo, { duration: 3000 });
            }

            this.cargando = false;
        });
        this.loadDataGraficas();
    }

    loadDataGraficas = () => {
        this.cargando = true;

        if (!this.params.fdel) {
            this.params.fdel = moment().subtract(1, 'week').format(GLOBAL.dbDateFormat);
        }

        if (!this.params.fal) {
            this.params.fal = moment().format(GLOBAL.dbDateFormat);
        }

        this.tableroService.getDataGraficas(this.params).subscribe((res: any) => {
            this.cargando = false;
            console.log(res);
            if (res.exito) {
                this.datosGraficas.porDia = res.pordia;
                this.datosGraficas.porCategoria = res.porcategoria;
                this.datosGraficas.porTurno = res.porturno;
                this.datosGraficas.porMesero = res.pormesero;
            } else {
                this.snackBar.open(`ERROR: ${res.mensaje}`, 'Graficas', { duration: 7000 });
            }
        });
    }
}
