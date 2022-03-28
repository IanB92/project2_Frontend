import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagerService } from '../manager.service';
import { MHomeComponent } from './m-home.component';
import { empty } from 'rxjs';
class fakeManagerService{
  fetchEmpReimbursement() {
    return empty();
  }
}

describe('MHomeComponent', () => {
  let component: MHomeComponent;
  let fixture: ComponentFixture<MHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MHomeComponent ], 
      providers:[{ provide: ManagerService, useClass: fakeManagerService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have strings', () =>{
    let welcome = fixture.nativeElement.querySelector('#welcome')
     expect(welcome.textContent).toContain('Search')
   })
});
