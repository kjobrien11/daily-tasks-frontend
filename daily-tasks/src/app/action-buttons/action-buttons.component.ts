import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';
import { MatDialog } from '@angular/material/dialog';
import { HistoryPopupComponent } from '../history-popup/history-popup.component';
import { UpdateActivityComponent } from '../update-activity/update-activity.component';
import { AnalyticsComponent } from '../analytics/analytics.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-action-buttons',
  imports: [],
  templateUrl: './action-buttons.component.html',
  styleUrl: './action-buttons.component.css'
})
export class ActionButtonComponent implements OnInit {

  streak: number = 0;

  constructor(private activityService: ActivityService, private popUp: MatDialog) { }

  ngOnInit(): void {
    this.loadStreak();
  }

  loadStreak(): void {
    this.activityService.getStreak().subscribe(data => this.streak = data);
  }

  openHistoryDialog() {
    this.popUp.open(HistoryPopupComponent, {
      width: '95vw',
      height: '90vh',
      maxWidth: '100vw',
    });
  }

  openUpdateActivityDialog() {
    this.popUp.open(UpdateActivityComponent, {
      width: '40vw',
      height: '60vh',
      maxWidth: '100vw',
    });
  }

  openAnalyticsDialog() {
    this.popUp.open(AnalyticsComponent, {
      width: '95vw',
      height: '90vh',
      maxWidth: '100vw',
    });
  }

  openSearchDialog() {
    this.popUp.open(SearchComponent, {
      width: '35vw',
      height: '70vh',
      maxWidth: '100vw',
    });
  }


}
