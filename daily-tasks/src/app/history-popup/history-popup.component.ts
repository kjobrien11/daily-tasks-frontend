import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';
import { DailyActivity } from '../interfaces/DailyActivity';
import { WeeklyHistory } from '../interfaces/WeekHistory';
import { MatDialog } from '@angular/material/dialog';
import { DayStatusComponent } from '../day-status/day-status.component';
import { NgFor } from '@angular/common';
import { ActivityBreakdownComponent } from '../activity-breakdown/activity-breakdown.component';

@Component({
  selector: 'app-history-popup',
  imports: [DayStatusComponent, NgFor, ActivityBreakdownComponent],
  templateUrl: './history-popup.component.html',
  styleUrl: './history-popup.component.css'
})
export class HistoryPopupComponent implements OnInit{

  rollingData! : WeeklyHistory[];

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.loadRollingData();
    console.log(this.rollingData);
  }


  loadRollingData(){
    this.activityService.getWeekHistory().subscribe(data => this.rollingData = data);
  }

}
