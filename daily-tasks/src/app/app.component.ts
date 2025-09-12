import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivityTodosComponent } from './activity-todos/activity-todos.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { HistoryComponent } from './history/history.component';

@Component({
  selector: 'app-root',
  imports: [ActivityTodosComponent, ProgressBarComponent, HistoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'daily-tasks';

  @ViewChild('progressBar') progressBar!: ProgressBarComponent;

  refreshProgress() {
    this.progressBar.loadProgressStatus();
  }
}
