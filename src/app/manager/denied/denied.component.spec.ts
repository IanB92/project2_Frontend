import { ComponentFixture, TestBed } from '@angular/core/testing';
import { empty } from 'rxjs';
import { DeniedComponent } from './denied.component';
import { ManagerService } from '../manager.service';

class fakeManagerService {
  fetchAllDenied() {
    return empty()
  }
};

describe('DeniedComponent', () => {
  let component: DeniedComponent;
  let fixture: ComponentFixture<DeniedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeniedComponent ] ,providers: [{ provide: ManagerService, useClass: fakeManagerService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeniedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
