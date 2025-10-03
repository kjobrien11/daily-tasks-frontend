import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-activity-completion-by-day',
  imports: [],
  templateUrl: './activity-completion-by-day.component.html',
  styleUrl: './activity-completion-by-day.component.css'
})
export class ActivityCompletionByDayComponent implements OnInit{

    constructor(private activityService: ActivityService) { }

    ngOnInit(): void {
      this.activityService.getAverageCompletionByDay().subscribe(data => console.log(data));
    }


}
