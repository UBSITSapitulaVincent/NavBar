import { TestBed } from '@angular/core/testing';

import { hoennService } from './hoenn.service';

describe('HoennService', () => {
  let service: hoennService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(hoennService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
