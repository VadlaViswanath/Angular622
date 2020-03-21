import { TestBed, inject } from '@angular/core/testing';

import { Ang6ServiceService } from './ang6-service.service';

describe('Ang6ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ang6ServiceService]
    });
  });

  it('should be created', inject([Ang6ServiceService], (service: Ang6ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
