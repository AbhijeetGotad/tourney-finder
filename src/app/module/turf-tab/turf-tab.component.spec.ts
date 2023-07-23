import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurfTabComponent } from './turf-tab.component';

describe('TurfTabComponent', () => {
  let component: TurfTabComponent;
  let fixture: ComponentFixture<TurfTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurfTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurfTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
