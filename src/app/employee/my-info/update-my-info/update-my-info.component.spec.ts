import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { EmployeeService } from '../../employee.service';
import { empty } from 'rxjs';
import { UpdateMyInfoComponent } from './update-my-info.component';
import { NgModel, NgForm } from '@angular/forms';

class fakeRouter {
  navigate() {

  }
}

class fakeEmployeeService {
  updateInfo() {
    return empty();
  }
  employeeInfo() {
    return empty();
  }
}

describe('UpdateMyInfoComponent', () => {
  let component: UpdateMyInfoComponent;
  let fixture: ComponentFixture<UpdateMyInfoComponent>;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateMyInfoComponent, NgForm],
      providers: [{ provide: Router, useClass: fakeRouter }, { provide: EmployeeService, useClass: fakeEmployeeService }],
     
    })

      .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
