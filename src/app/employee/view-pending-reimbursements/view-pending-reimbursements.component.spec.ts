import { ComponentFixture, TestBed } from '@angular/core/testing';
import { empty } from 'rxjs';
import { ViewPendingReimbursementsComponent } from './view-pending-reimbursements.component';
import { EmployeeService } from '../employee.service';

class fakeEmployeeService {
  pendingReimbursements() {
    return empty()
  }
};

describe('ViewPendingReimbursementsComponent', () => {
  let component: ViewPendingReimbursementsComponent;
  let fixture: ComponentFixture<ViewPendingReimbursementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewPendingReimbursementsComponent], providers: [{ provide: EmployeeService, useClass: fakeEmployeeService }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPendingReimbursementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
