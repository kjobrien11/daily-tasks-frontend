import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';
import { DailyActivity } from '../interfaces/DailyActivity';
import { WeeklyHistory } from '../interfaces/WeekHistory';
import { MatDialog } from '@angular/material/dialog';
import { DayStatusComponent } from '../day-status/day-status.component';
import { NgFor } from '@angular/common';
import { ActivityBreakdownComponent } from '../activity-breakdown/activity-breakdown.component';
import { ActivityBreakdown } from '../interfaces/ActivityBreakdown';
import { Breakdown } from '../interfaces/Breakdown';

@Component({
  selector: 'app-history-popup',
  imports: [DayStatusComponent, NgFor, ActivityBreakdownComponent],
  templateUrl: './history-popup.component.html',
  styleUrl: './history-popup.component.css'
})
export class HistoryPopupComponent implements OnInit {

  rollingData!: WeeklyHistory[];
  rollingDataBreakdown!: Breakdown[];
  averageCompletionPercentage: number = 0;

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.loadRollingData();
  }

  loadRollingData() {
    this.activityService.getWeekHistory().subscribe(data => this.rollingData = data);
    this.activityService.getWeekBreakdown().subscribe(data => {
      this.rollingDataBreakdown = data;
      this.calculateAveragePercentage();
    });
  }

  calculateAveragePercentage() {
    let total = 0;
    for (const day of this.rollingDataBreakdown) {
      total += day.percentage;
    }

    this.averageCompletionPercentage = total / this.rollingDataBreakdown.length;
  }
}
