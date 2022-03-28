import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeService } from '../employee.service';
import { RequestReimbursementComponent } from './request-reimbursement.component';
import { empty } from 'rxjs';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgForm } from '@angular/forms';

class fakeRouter{
  navigate(){

  }
}
class fakeEmployeeService {
  reimbursement() {
    return empty()
  }
};

describe('RequestReimbursementComponent', () => {
  let component: RequestReimbursementComponent;
  let fixture: ComponentFixture<RequestReimbursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestReimbursementComponent, NgForm ],providers: [{ provide: EmployeeService, useClass: fakeEmployeeService },{ provide: Router, useClass: fakeRouter }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestReimbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have strings', () =>{
    let welcome = fixture.nativeElement.querySelector('#welcome')
     expect(welcome.textContent).toContain('Upload')
   })
  // it('should request a reimbursement', ()=>{

  //   const compiled  = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.reimAmount')?.textContent).toContain(Number);
  //   expect(compiled.querySelector('.reimReason')?.textContent).toContain(String);
  // });
});
