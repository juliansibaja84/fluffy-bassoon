import { TestBed, inject } from '@angular/core/testing';

import { DreamsService } from './dreams.service';

describe('DreamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DreamsService]
    });
  });

  it('should be created', inject([DreamsService], (service: DreamsService) => {
    expect(service).toBeTruthy();
  }));
});
