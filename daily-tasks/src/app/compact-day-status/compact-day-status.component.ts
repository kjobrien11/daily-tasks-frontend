import { Component, Input } from '@angular/core';
import { WeeklyHistory } from '../interfaces/WeekHistory';
import { MatDialog } from '@angular/material/dialog';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-compact-day-status',
  imports: [],
  templateUrl: './compact-day-status.component.html',
  styleUrl: './compact-day-status.component.css'
})
export class CompactDayStatusComponent {

  @Input() data!: WeeklyHistory;

  openSearchDialog() {
    this.popUp.open(SearchComponent, {
      width: '35vw',
      height: '70vh',
      maxWidth: '100vw',
      data: { date: this.data.date || null }
    });
  }

  constructor(private popUp: MatDialog) { }


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
