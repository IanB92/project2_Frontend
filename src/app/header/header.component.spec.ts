import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeaderComponent } from './header.component';
import { HttpClient } from '@angular/common/http';
import {AuthService} from '../user/auth.service';
import { empty } from 'rxjs';
class FakeAuthservice{
  loggedIn = true;
  
  managerRole = true;
   
  }

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ HeaderComponent ], providers:[{provide: AuthService, useClass: FakeAuthservice}]
    })
    .compileComponents();

    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show denied tab when manager logs in', ()=>{
   let denied =  fixture.debugElement.nativeElement.querySelector('#denied')
    expect(denied.textContent).toBe('Denied');
  })
  it('should show approved tab when manager logs in', ()=>{
    let denied =  fixture.debugElement.nativeElement.querySelector('#approved')
     expect(denied.textContent).toBe('Approved');
   })
   it('should show pending tab when manager logs in', ()=>{
    let denied =  fixture.debugElement.nativeElement.querySelector('#pending')
     expect(denied.textContent).toBe('Pending');
   })
   it('should show Log Out tab when manager logs in', ()=>{
    let denied =  fixture.debugElement.nativeElement.querySelector('#logout')
     expect(denied.textContent).toBe('Log Out');
   })
});
