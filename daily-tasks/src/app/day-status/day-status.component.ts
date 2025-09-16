import { Component } from '@angular/core';
import { DailyActivity } from '../interfaces/DailyActivity';

@Component({
  selector: 'app-day-status',
  imports: [],
  templateUrl: './day-status.component.html',
  styleUrl: './day-status.component.css'
})
export class DayStatusComponent {

  

  dayData: DailyActivity[] = [
    {
        "id": 47,
        "date": "2025-09-15",
        "isComplete": false,
        "activity": {
            "id": 5,
            "title": "Connect 2 Minutes",
            "description": "Spend 2 minutes each day deepening connection with yourself, others, or the present moment through meditation, gratitude, active listening, sincere compliments, acts of kindness, or mindful awareness."
        }
    },
    {
        "id": 46,
        "date": "2025-09-15",
        "isComplete": false,
        "activity": {
            "id": 4,
            "title": "Reflect 5 Minutes",
            "description": "Reflect and journal on your day for 5 minutes: what went well, what was challenging, how you responded, and areas to improve."
        }
    },
    {
        "id": 45,
        "date": "2025-09-15",
        "isComplete": true,
        "activity": {
            "id": 3,
            "title": "Career Work 2 Minutes",
            "description": "Spend 2 minutes daily improving as a software engineer—coding, studying design/architecture, learning new tech, or practicing soft skills."
        }
    },
    {
        "id": 44,
        "date": "2025-09-15",
        "isComplete": true,
        "activity": {
            "id": 2,
            "title": "Exercise 2 Minutes",
            "description": "Exercise for 2 minutes daily, choosing either strength training or cardio."
        }
    },
    {
        "id": 43,
        "date": "2025-09-15",
        "isComplete": true,
        "activity": {
            "id": 1,
            "title": "Read 1 Page",
            "description": "Read one page of a book outside your industry to broaden your perspective."
        }
    },
  ]

}
