import { TestBed } from '@angular/core/testing';

import { DataTrasnferService } from './data-trasnfer.service';

describe('DataTrasnferService', () => {
  let service: DataTrasnferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTrasnferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
