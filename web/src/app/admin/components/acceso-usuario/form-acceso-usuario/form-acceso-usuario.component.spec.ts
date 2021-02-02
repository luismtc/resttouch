import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormAccesoUsuarioComponent } from './form-acceso-usuario.component';

describe('FormAccesoUsuarioComponent', () => {
  let component: FormAccesoUsuarioComponent;
  let fixture: ComponentFixture<FormAccesoUsuarioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAccesoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAccesoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
