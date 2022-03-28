import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MyInfoComponent } from './my-info.component';
import { EmployeeService } from '../employee.service';
import { empty } from 'rxjs';

class fakeRouter {
  navigate() {

  }
}

class fakeEmployeeService {
  employeeInfo() {
    return empty();
  }}
describe('MyInfoComponent', () => {
  let component: MyInfoComponent;
  let fixture: ComponentFixture<MyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInfoComponent ], providers: [{ provide: Router, useClass: fakeRouter }, { provide: EmployeeService, useClass: fakeEmployeeService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have strings', () =>{
    let welcome = fixture.nativeElement.querySelector('#welcome')
     expect(welcome.textContent).toContain('UPDATE')
   })
});
