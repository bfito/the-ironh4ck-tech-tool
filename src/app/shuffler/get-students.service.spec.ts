import { TestBed, inject } from '@angular/core/testing';

import { GetStudentsService } from './get-students.service';

describe('GetStudentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetStudentsService]
    });
  });

  it('should ...', inject([GetStudentsService], (service: GetStudentsService) => {
    expect(service).toBeTruthy();
  }));
});
