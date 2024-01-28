import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachAddEditComponent } from './coach-add-edit.component';

describe('CoachAddEditComponent', () => {
  let component: CoachAddEditComponent;
  let fixture: ComponentFixture<CoachAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoachAddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoachAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
