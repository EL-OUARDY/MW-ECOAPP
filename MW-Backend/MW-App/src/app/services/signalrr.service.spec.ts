import { TestBed } from '@angular/core/testing';

import { SignalrrService } from './signalrr.service';

describe('SignalrrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignalrrService = TestBed.get(SignalrrService);
    expect(service).toBeTruthy();
  });
});
