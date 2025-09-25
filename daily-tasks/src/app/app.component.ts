import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivityTodosComponent } from './activity-todos/activity-todos.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ActionButtonComponent } from './action-buttons/action-buttons.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivityService } from './services/activity.service';

@Component({
  selector: 'app-root',
  imports: [ActivityTodosComponent, ProgressBarComponent, ActionButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'daily-tasks';

  constructor(private activityService: ActivityService) {}

  @ViewChild('progressBar') progressBar!: ProgressBarComponent;
  @ViewChild('history') history!: ActionButtonComponent;

  ngOnInit() {
  this.activityService.progressUpdated$.subscribe(() => {
    this.refreshProgress();
  });
}
  

  refreshProgress() {
    this.progressBar.loadProgressStatus();
    this.history.loadStreak();
  }
}
