import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityBreakdownComponent } from './activity-breakdown.component';

describe('ActivityBreakdownComponent', () => {
  let component: ActivityBreakdownComponent;
  let fixture: ComponentFixture<ActivityBreakdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityBreakdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
