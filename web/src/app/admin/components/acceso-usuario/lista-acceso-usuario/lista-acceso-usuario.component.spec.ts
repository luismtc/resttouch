import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAccesoUsuarioComponent } from './lista-acceso-usuario.component';

describe('ListaAccesoUsuarioComponent', () => {
  let component: ListaAccesoUsuarioComponent;
  let fixture: ComponentFixture<ListaAccesoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAccesoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAccesoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
