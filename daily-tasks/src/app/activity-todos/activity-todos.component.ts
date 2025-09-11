import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DailyActivity } from '../interfaces/DailyActivity';
import { ActivityService } from '../services/activity.service';
import { CompleteActivityRequest } from '../interfaces/CompleteActivityRequest';

@Component({
  selector: 'app-activity-todos',
  imports: [CommonModule],
  templateUrl: './activity-todos.component.html',
  styleUrl: './activity-todos.component.css'
})
export class ActivityTodosComponent {

  constructor(private activityService: ActivityService) { }
  activities: DailyActivity[] = [];

  ngOnInit(): void {
    this.loadActivities();
  }

  loadActivities(): void {
    this.activityService.getTodaysActivities().subscribe(data => this.activities = data);
  }

  updateItemCompleted(item: DailyActivity) {
  

    const activity: CompleteActivityRequest = {
      date: item.date,
      activityId: item.activity.id
    };



    const call$ = item.isComplete
      ? this.activityService.markActitivityUnComplete(activity)
      : this.activityService.markActitivityComplete(activity);

    call$.subscribe({
      next: (response) => {
        console.log('Activity updated:', response);
        this.loadActivities();
      },
      error: (err) => console.error('Error updating activity:', err)
    });
  }




}
