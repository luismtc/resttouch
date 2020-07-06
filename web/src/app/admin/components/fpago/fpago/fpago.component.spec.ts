import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpagoComponent } from './fpago.component';

describe('FpagoComponent', () => {
  let component: FpagoComponent;
  let fixture: ComponentFixture<FpagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
