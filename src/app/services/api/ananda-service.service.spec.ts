import { TestBed } from '@angular/core/testing';

import { AnandaServiceService } from './ananda-service.service';

describe('AnandaServiceService', () => {
  let service: AnandaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnandaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
