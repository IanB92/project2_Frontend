import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from './employee.service';

class FakeHttpClient{
  
}

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[ {provide: HttpClient, useClass: FakeHttpClient}],
    });
    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
