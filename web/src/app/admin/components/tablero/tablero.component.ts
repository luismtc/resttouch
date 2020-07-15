import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PivotViewComponent, IDataOptions, IDataSet, FieldListService, PivotView } from '@syncfusion/ej2-angular-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { TableroService } from '../../services/tablero.service';

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
    public titulo: string = 'Tablero';
    public estDias: number = 0;
    public estMin: string = '';
    public estMax: string = '';
    public estMedia: string = '';
    public estTotal: string = '';
    public cargando: boolean = false;

    @ViewChild('pivotview',{static: false})
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
    }
}
