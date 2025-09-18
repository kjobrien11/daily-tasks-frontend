import { Component } from '@angular/core';
import { ActivityBreakdown } from '../interfaces/ActivityBreakdown';

@Component({
  selector: 'app-activity-breakdown',
  imports: [],
  templateUrl: './activity-breakdown.component.html',
  styleUrl: './activity-breakdown.component.css'
})
export class ActivityBreakdownComponent {


  data : ActivityBreakdown = {
        "activityName": "Career Work 2 Minutes",
        "percentage": 100,
        "completion": [
            true,
            true,
            true,
            true,
            true,
            true,
            true
        ]
    }
}
