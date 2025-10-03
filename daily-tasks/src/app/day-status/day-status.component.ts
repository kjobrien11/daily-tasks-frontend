import { Component, Input } from '@angular/core';
import { DailyActivity } from '../interfaces/DailyActivity';
import { WeeklyHistory } from '../interfaces/WeekHistory';

@Component({
  selector: 'app-day-status',
  imports: [],
  templateUrl: './day-status.component.html',
  styleUrl: './day-status.component.css'
})
export class DayStatusComponent {

  @Input() data!: WeeklyHistory;

  getBackgroundColor(percentage: number): string {
    if (percentage === 100) {
      return '#A9CAB0';
    } else if (percentage >= 80) {
      return '#ff9999ff';
    } else if (percentage >= 60) {
      return '#ff7070ff';
    } else if (percentage >= 20) {
      return '#fe4545ff';
    } else {
      return '#fb1919ff';
    }
  }
}
