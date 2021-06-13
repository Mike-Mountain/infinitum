import { TestBed } from '@angular/core/testing';

import { FileNavigationService } from './file-navigation.service';

describe('FileNavigationService', () => {
  let service: FileNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
