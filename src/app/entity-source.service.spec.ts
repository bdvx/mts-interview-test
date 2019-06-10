import { TestBed } from '@angular/core/testing';

import { EntitySourceService } from './entity-source.service';

describe('EntitySourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntitySourceService = TestBed.get(EntitySourceService);
    expect(service).toBeTruthy();
  });
});
