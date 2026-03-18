import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayLeaveCardComponent } from './holiday-leave-card.component';

describe('HolidayLeaveCardComponent', () => {
  let component: HolidayLeaveCardComponent;
  let fixture: ComponentFixture<HolidayLeaveCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolidayLeaveCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayLeaveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
