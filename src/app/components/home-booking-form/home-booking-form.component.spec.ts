import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBookingFormComponent } from './home-booking-form.component';

describe('HomeBookingFormComponent', () => {
  let component: HomeBookingFormComponent;
  let fixture: ComponentFixture<HomeBookingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBookingFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeBookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
