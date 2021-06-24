import { TestBed } from '@angular/core/testing';

import { OrdenGkService } from './orden-gk.service';

describe('OrdenGkService', () => {
  let service: OrdenGkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenGkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
