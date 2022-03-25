import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { LoginComponent } from './login.component';

class fakeUserService{

}
class fakeRouter{
  navigate(){
    
  }
}
class fakeAuthService{
  destroyEmployeeUser(){

  }}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
        providers:[{provide: Router, useClass: fakeRouter}, {provide: AuthService, useClass: fakeAuthService}, {provide: UserService, useClass: fakeUserService}],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
