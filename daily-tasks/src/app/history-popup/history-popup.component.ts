import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';
import { DailyActivity } from '../interfaces/DailyActivity';
import { WeeklyHistory } from '../interfaces/WeekHistory';
import { MatDialog } from '@angular/material/dialog';
import { DayStatusComponent } from '../day-status/day-status.component';
import { NgFor } from '@angular/common';
import { ActivityBreakdownComponent } from '../activity-breakdown/activity-breakdown.component';
import { ActivityBreakdown } from '../interfaces/ActivityBreakdown';

@Component({
  selector: 'app-history-popup',
  imports: [DayStatusComponent, NgFor, ActivityBreakdownComponent],
  templateUrl: './history-popup.component.html',
  styleUrl: './history-popup.component.css'
})
export class HistoryPopupComponent implements OnInit{

  rollingData! : WeeklyHistory[];

    data: ActivityBreakdown = 
  {
    "activityName": "Career Work 2 Minutes",
    "percentage": 100,
    "completion": [true, true, true, true, true, true, true]
  };

//   activities: ActivityBreakdown[] = [
//   {
//     activityName: "Career Work 2 Minutes",
//     percentage: 100,
//     completion: [true, true, true, true, true, true, true]
//   },
//   {
//     activityName: "Running",
//     percentage: 85,
//     completion: [true, false, true, true, false, true, true]
//   }
// ];

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.loadRollingData();
    console.log(this.rollingData);
  }


  loadRollingData(){
    this.activityService.getWeekHistory().subscribe(data => this.rollingData = data);
  }

}
