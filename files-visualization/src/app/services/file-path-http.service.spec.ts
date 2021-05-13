import { TestBed } from '@angular/core/testing';

import { FilePathHttpService } from './file-path-http.service';

describe('FilePathHttpService', () => {
  let service: FilePathHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilePathHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
