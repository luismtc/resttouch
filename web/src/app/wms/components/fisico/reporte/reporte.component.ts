import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReportePdfService } from '../../../../restaurante/services/reporte-pdf.service';
import { SedeService } from '../../../../admin/services/sede.service';
import { Bodega } from '../../../interfaces/bodega';
import { BodegaService } from '../../../services/bodega.service';
import { Categoria } from '../../../interfaces/categoria';
import { CategoriaGrupo } from '../../../interfaces/categoria-grupo';
import { ArticuloService } from '../../../services/articulo.service';
import { FisicoService } from '../../../services/fisico.service';
import { Sede } from '../../../../admin/interfaces/sede';
import { saveAs } from 'file-saver';
import { LocalstorageService } from '../../../../admin/services/localstorage.service';
import { GLOBAL } from '../../../../shared/global';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  public bodegas: Bodega[] = [];
  public sedes: Sede[] = [];
  public params: any = {};
  public categorias: Categoria[] = [];
  public categoriasGruposPadre: CategoriaGrupo[] = [];
  public categoriasGrupos: CategoriaGrupo[] = [];
  public titulo: string = "Fisico";
  public cargando = false;
  public showReporte = true;

  constructor(
    private snackBar: MatSnackBar,
    private pdfServicio: ReportePdfService,
    private sedeSrvc: SedeService,
    private bodegaSrvc: BodegaService,
    private articuloSrvc: ArticuloService,
    private fisicoSrvc: FisicoService,
    private ls: LocalstorageService,
  ) { }

  ngOnInit() {
    this.getSede();
    this.getBodega();
    this.loadCategorias();
  }

  getSede = (params: any = {}) => {
    this.sedeSrvc.get(params).subscribe(res => {
      this.sedes = res;
    });
  }

  getBodega = (params: any = {}) => {
    this.bodegaSrvc.get(params).subscribe(res => {
      this.bodegas = res;
    });
  }

  loadCategorias = () => {
    this.articuloSrvc.getCategorias({sede: (+this.ls.get(GLOBAL.usrTokenVar).sede || 0)}).subscribe(res => {
      //console.log(res);
      if (res) {
        this.categorias = res;
      }
    });
  }

  onCategoriaSelected = (obj: any) => this.loadSubCategorias(+obj.value.categoria);

  loadSubCategorias = (idcategoria: number) => {
    this.articuloSrvc.getCategoriasGrupos({ categoria: +idcategoria }).subscribe(res => {
      if (res) {
        this.categoriasGruposPadre = this.articuloSrvc.adaptCategoriaGrupoResponse(res);
        this.categoriasGrupos = this.categoriasGruposPadre;
      }
    });
  }

  onSubCategoriaPadreSelected = (obj: any) => this.loadSubCategoriasSubcategorias(+obj.value);

  loadSubCategoriasSubcategorias = (idsubcat: number) => {
    this.articuloSrvc.getCategoriasGrupos({ categoria_grupo_grupo: idsubcat }).subscribe(res => {
      if (res) {
        this.categoriasGrupos = this.articuloSrvc.adaptCategoriaGrupoResponse(res);
      }
    });
  }

  onSubmit() {
    this.cargando = true;
    
    this.fisicoSrvc.generarInventarioFisico(this.params).subscribe(res => {
      this.cargando = false;
      console.log(res)
      if (res.exito) {
        this.pdfServicio.imprimirInventarioFisico(res.inventario).subscribe(resImp => {
          const blob = new Blob([resImp], { type: 'application/pdf' });
          saveAs(blob, `${this.titulo}.pdf`);
        });
      } else {
        this.snackBar.open('No se pudo generar el reporte...', this.titulo, { duration: 3000 });
      }
    });
  }

}
