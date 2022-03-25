import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

class fakeAuthService{
loggedIn = true;
}
class fakeRouter{
  navigate(){
    
  }
}

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule
      ],
      providers:[{provide: Router, useClass: fakeRouter}, {provide: AuthService, useClass: fakeAuthService}, ],
    });
    guard = TestBed.inject(AuthGuard);
    
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
