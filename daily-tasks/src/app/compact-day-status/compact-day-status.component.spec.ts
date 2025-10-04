import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactDayStatusComponent } from './compact-day-status.component';

describe('CompactDayStatusComponent', () => {
  let component: CompactDayStatusComponent;
  let fixture: ComponentFixture<CompactDayStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompactDayStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompactDayStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
