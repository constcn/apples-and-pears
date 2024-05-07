import { TestBed } from '@angular/core/testing';

import { ApplesOutlookService } from './apples-outlook.service';

describe('ApplesOutlookService', () => {
  let service: ApplesOutlookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplesOutlookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
