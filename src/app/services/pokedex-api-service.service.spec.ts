import { TestBed } from '@angular/core/testing';

import { PokedexApiServiceService } from './pokedex-api-service.service';

describe('PokedexApiServiceService', () => {
  let service: PokedexApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokedexApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
