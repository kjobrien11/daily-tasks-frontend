import { Component } from '@angular/core';
import { ActivityCompletionByDayComponent } from '../activity-completion-by-day/activity-completion-by-day.component';

@Component({
  selector: 'app-analytics',
  imports: [ActivityCompletionByDayComponent],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css',
  standalone: true
})
export class AnalyticsComponent {

}
