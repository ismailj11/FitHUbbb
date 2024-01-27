import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackshopComponent } from './snackshop.component';

describe('SnackshopComponent', () => {
  let component: SnackshopComponent;
  let fixture: ComponentFixture<SnackshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SnackshopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnackshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
