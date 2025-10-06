import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';
import { AverageCompletionByDay } from '../interfaces/AverageCompletionByDay';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-activity-completion-by-day',
  imports: [NgFor],
  templateUrl: './activity-completion-by-day.component.html',
  styleUrl: './activity-completion-by-day.component.css'
})
export class ActivityCompletionByDayComponent implements OnInit {

  constructor(private activityService: ActivityService) { }

  averageCompletionDataByDay!: AverageCompletionByDay[];
  top3Activities: String[] = [];
  bottom3Activities: String[] = [];
  longestStreak: number = -1;


  ngOnInit(): void {
    this.activityService.getAverageCompletionByDay().subscribe(data => this.averageCompletionDataByDay = data);
    this.activityService.getTop3Activites().subscribe(data => this.top3Activities = data);
    this.activityService.getBottom3Activites().subscribe(data => this.bottom3Activities = data);
    this.activityService.getLongestStreak().subscribe(data => this.longestStreak = data);
  }

  getBackgroundColor(percentage: number): string {
    if (percentage === 100) {
      return '#35c554ff';
    } else if (percentage >= 80) {
      return '#92cf47ff';
    } else if (percentage >= 60) {
      return '#f9fe96ff';
    } else if (percentage >= 20) {
      return '#cfbd75ff';
    } else {
      return '#cffad8ff';
    }
  }


}
