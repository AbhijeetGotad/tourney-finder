import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompetitionModelComponent } from './add-competition-model.component';

describe('AddCompetitionModelComponent', () => {
  let component: AddCompetitionModelComponent;
  let fixture: ComponentFixture<AddCompetitionModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompetitionModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCompetitionModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
