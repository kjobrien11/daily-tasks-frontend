import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTodosComponent } from './activity-todos.component';

describe('ActivityTodosComponent', () => {
  let component: ActivityTodosComponent;
  let fixture: ComponentFixture<ActivityTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityTodosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
