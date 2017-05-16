import { TestBed, inject } from '@angular/core/testing';

import { HttpProviderService } from './http-provider.service';

describe('HttpProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpProviderService]
    });
  });

  it('should ...', inject([HttpProviderService], (service: HttpProviderService) => {
    expect(service).toBeTruthy();
  }));
});
