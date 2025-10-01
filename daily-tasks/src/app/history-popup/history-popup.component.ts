import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';
import { DailyActivity } from '../interfaces/DailyActivity';
import { WeeklyHistory } from '../interfaces/WeekHistory';
import { MatDialog } from '@angular/material/dialog';
import { DayStatusComponent } from '../day-status/day-status.component';
import { NgFor, NgIf } from '@angular/common';
import { ActivityBreakdownComponent } from '../activity-breakdown/activity-breakdown.component';
import { CompactDayStatusComponent } from '../compact-day-status/compact-day-status.component';
import { Breakdown } from '../interfaces/Breakdown';


@Component({
  selector: 'app-history-popup',
  imports: [DayStatusComponent, NgFor, NgIf, ActivityBreakdownComponent, CompactDayStatusComponent],
  templateUrl: './history-popup.component.html',
  styleUrl: './history-popup.component.css'
})
export class HistoryPopupComponent implements OnInit {

  rollingData!: WeeklyHistory[];
  rollingDataBreakdown!: Breakdown[];
  averageCompletionPercentage: number = 0;
  sevenDayMode: boolean = true;

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

  updateSevenDayMode(){
    this.sevenDayMode = !this.sevenDayMode;
  }
}
