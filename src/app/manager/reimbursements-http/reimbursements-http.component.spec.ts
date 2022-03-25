import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagerService } from '../manager.service';
import { ReimbursementsHttpComponent } from './reimbursements-http.component';
import { empty } from 'rxjs';
class FakeManagerService{
  fetchAllPending(){
    return empty();
  }
}
describe('ReimbursementsHttpComponent', () => {
  let component: ReimbursementsHttpComponent;
  let fixture: ComponentFixture<ReimbursementsHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimbursementsHttpComponent ], providers : [{provide: ManagerService, useClass: FakeManagerService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimbursementsHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
