import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageRootComponent } from './homepage-root.component';

describe('HomepageRootComponent', () => {
  let component: HomepageRootComponent;
  let fixture: ComponentFixture<HomepageRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
