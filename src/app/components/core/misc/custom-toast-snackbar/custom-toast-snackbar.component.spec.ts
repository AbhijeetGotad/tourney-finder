import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomToastSnackbarComponent } from './custom-toast-snackbar.component';

describe('CustomToastSnackbarComponent', () => {
  let component: CustomToastSnackbarComponent;
  let fixture: ComponentFixture<CustomToastSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomToastSnackbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomToastSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
