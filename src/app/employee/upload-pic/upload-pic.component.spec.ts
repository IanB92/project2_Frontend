import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { UploadPicComponent } from './upload-pic.component';

class FakeHttpClient{

}
describe('UploadPicComponent', () => {
  let component: UploadPicComponent;
  let fixture: ComponentFixture<UploadPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadPicComponent ], providers: [{ provide: HttpClient, useClass: FakeHttpClient }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
