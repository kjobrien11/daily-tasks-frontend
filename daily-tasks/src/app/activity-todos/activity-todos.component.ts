import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-activity-todos',
  imports: [CommonModule],
  templateUrl: './activity-todos.component.html',
  styleUrl: './activity-todos.component.css'
})
export class ActivityTodosComponent {


  data = [
    {
      "id": 1,
      "date": "2025-09-10",
      "isComplete": false,
      "activity": {
        "id": 1,
        "title": "Activity 1",
        "description": "Description for activity 1."
      }
    },
    {
      "id": 2,
      "date": "2025-09-10",
      "isComplete": false,
      "activity": {
        "id": 2,
        "title": "Activity 2",
        "description": "Description for activity 2."
      }
    },
    {
      "id": 3,
      "date": "2025-09-10",
      "isComplete": false,
      "activity": {
        "id": 3,
        "title": "Activity 3",
        "description": "Description for activity 3."
      }
    },
    {
      "id": 4,
      "date": "2025-09-10",
      "isComplete": false,
      "activity": {
        "id": 4,
        "title": "Activity 4",
        "description": "Description for activity 4."
      }
    },
    {
      "id": 5,
      "date": "2025-09-10",
      "isComplete": false,
      "activity": {
        "id": 5,
        "title": "Activity 5",
        "description": "Description for activity 5."
      }
    }
  ]


}
