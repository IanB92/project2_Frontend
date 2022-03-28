import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagerService } from '../manager.service';
import { ResolvedComponent } from './resolved.component';
import { empty } from 'rxjs';

class fakeManagerService {
  fetchAllResolved() {
    return empty()
  }
};

describe('ResolvedComponent', () => {
  let component: ResolvedComponent;
  let fixture: ComponentFixture<ResolvedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolvedComponent ],providers: [{ provide: ManagerService, useClass: fakeManagerService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have strings', () =>{
    let welcome = fixture.nativeElement.querySelector('#welcome')
     expect(welcome.textContent).toContain('Resolved')
   })
});
