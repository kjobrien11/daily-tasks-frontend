import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityCompletionByDayComponent } from './activity-completion-by-day.component';

describe('ActivityCompletionByDayComponent', () => {
  let component: ActivityCompletionByDayComponent;
  let fixture: ComponentFixture<ActivityCompletionByDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityCompletionByDayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityCompletionByDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
