import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      //provider:[UserService]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('return', ()=> {
   let user=  {
    	

      managerId: 1,
      firstName: 'String',
      lastName: 'String',
      address: 'String',
      contact: 'String',
      email: 'String',
      userName: 'String',
      password: 'String',
    
  }
   
    expect(service.validateManager(user)).toBeTruthy();
  })
});
