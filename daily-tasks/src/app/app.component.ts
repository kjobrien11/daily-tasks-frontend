import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivityTodosComponent } from './activity-todos/activity-todos.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@Component({
  selector: 'app-root',
  imports: [ActivityTodosComponent, ProgressBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'daily-tasks';
}
