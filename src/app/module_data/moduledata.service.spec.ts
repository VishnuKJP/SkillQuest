import { TestBed, inject } from '@angular/core/testing';

import { ModuledataService } from './moduledata.service';

describe('ModuledataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModuledataService]
    });
  });

  it('should be created', inject([ModuledataService], (service: ModuledataService) => {
    expect(service).toBeTruthy();
  }));
});
