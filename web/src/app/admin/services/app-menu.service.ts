import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppMenuService {

  private dataObs$ = new Subject();
  private opciones$ = new Subject();

  constructor() { }

  getData = () => this.dataObs$;

  updData = (data: any) => this.dataObs$.next(data);

  getOpciones = () => this.opciones$;

  updOpciones = (opcs: any) => this.opciones$.next(opcs);
}
