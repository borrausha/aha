import { TestBed } from '@angular/core/testing';

import { MollywoodmodeService } from './mollywoodmode.service';

describe('MollywoodmodeService', () => {
  let service: MollywoodmodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MollywoodmodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
