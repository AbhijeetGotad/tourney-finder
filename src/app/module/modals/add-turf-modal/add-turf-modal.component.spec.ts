import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTurfModalComponent } from './add-turf-modal.component';

describe('AddTurfModalComponent', () => {
  let component: AddTurfModalComponent;
  let fixture: ComponentFixture<AddTurfModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTurfModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTurfModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
