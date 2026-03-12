import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsCarousalComponent } from './apps-carousal.component';

describe('AppsCarousalComponent', () => {
  let component: AppsCarousalComponent;
  let fixture: ComponentFixture<AppsCarousalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppsCarousalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppsCarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
