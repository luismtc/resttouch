import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccesoUsuarioComponent } from './acceso-usuario.component';

describe('AccesoUsuarioComponent', () => {
  let component: AccesoUsuarioComponent;
  let fixture: ComponentFixture<AccesoUsuarioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
