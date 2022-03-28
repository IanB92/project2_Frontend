import { ComponentFixture, TestBed } from '@angular/core/testing';
import { empty } from 'rxjs';
import { ViewResolvedReimbursementsComponent } from './view-resolved-reimbursements.component';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../employee.service';


describe('ViewResolvedReimbursementsComponent', () => {
  let component: ViewResolvedReimbursementsComponent;
  let fixture: ComponentFixture<ViewResolvedReimbursementsComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  let spy;
  class  fakeEmployeeService {
    resolvedReimbursements() {
      return empty()
    }
  };



  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    await TestBed.configureTestingModule({

      declarations: [ViewResolvedReimbursementsComponent], providers: [{ provide: EmployeeService, useClass: fakeEmployeeService }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewResolvedReimbursementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have strings', () =>{
    let welcome = fixture.nativeElement.querySelector('#welcome')
     expect(welcome.textContent).toContain('Reimbursement')
   })
 
});
