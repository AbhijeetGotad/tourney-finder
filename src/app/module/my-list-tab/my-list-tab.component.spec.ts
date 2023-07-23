import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListTabComponent } from './my-list-tab.component';

describe('MyListTabComponent', () => {
  let component: MyListTabComponent;
  let fixture: ComponentFixture<MyListTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyListTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyListTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
