import { TestBed, inject } from '@angular/core/testing';

import { AddressTranslatorService } from './address.translator.service';

describe('AddressTranslatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddressTranslatorService]
    });
  });

  it('should be created', inject([AddressTranslatorService], (service: AddressTranslatorService) => {
    expect(service).toBeTruthy();
  }));
});
