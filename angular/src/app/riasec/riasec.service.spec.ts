import { TestBed, inject } from '@angular/core/testing';

import { RiasecService } from './riasec.service';

describe('RiasecService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RiasecService]
    });
  });

  it('should be created', inject([RiasecService], (service: RiasecService) => {
    expect(service).toBeTruthy();
  }));
});
