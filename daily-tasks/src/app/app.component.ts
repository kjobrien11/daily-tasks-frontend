import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivityTodosComponent } from './activity-todos/activity-todos.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ActionButtonComponent } from './history/action-buttons.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  imports: [ActivityTodosComponent, ProgressBarComponent, ActionButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'daily-tasks';

  constructor(private popUp: MatDialog) {}

  @ViewChild('progressBar') progressBar!: ProgressBarComponent;
  @ViewChild('history') history!: ActionButtonComponent;
  

  refreshProgress() {
    this.progressBar.loadProgressStatus();
    this.history.loadStreak();
  }
}
