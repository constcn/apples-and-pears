import { TestBed } from '@angular/core/testing';

import { ReloadDetectorService } from './reload-detector.service';

describe('ReloadDetectorService', () => {
  let service: ReloadDetectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReloadDetectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
