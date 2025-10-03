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
export class ActivityCompletionByDayComponent implements OnInit{

    constructor(private activityService: ActivityService) { }

    averageCompletionDataByDay!: AverageCompletionByDay[];

    ngOnInit(): void {
      this.activityService.getAverageCompletionByDay().subscribe(data => this.averageCompletionDataByDay = data);
    }


}
