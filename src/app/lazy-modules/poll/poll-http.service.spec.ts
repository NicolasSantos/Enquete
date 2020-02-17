import { TestBed, inject } from '@angular/core/testing';

import { PollHttpService } from './poll-http.service';

describe('PollHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PollHttpService]
    });
  });

  it('should be created', inject([PollHttpService], (service: PollHttpService) => {
    expect(service).toBeTruthy();
  }));
});
