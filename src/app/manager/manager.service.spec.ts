import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { ManagerService } from './manager.service';

class FakeHttpClient{
  
}


describe('ManagerService', () => {
  let service: ManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers:[ {provide: HttpClient, useClass: FakeHttpClient}]});
    service = TestBed.inject(ManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  

});

