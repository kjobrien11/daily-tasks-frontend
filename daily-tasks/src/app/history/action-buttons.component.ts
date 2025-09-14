import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-action-buttons',
  imports: [],
  templateUrl: './action-buttons.component.html',
  styleUrl: './action-buttons.component.css'
})
export class ActionButtonComponent implements OnInit {

  streak: number = 0;

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.loadStreak();
  }

  loadStreak(): void{
    this.activityService.getStreak().subscribe(data => this.streak = data);
  }

  showHistory():void{
    console.log("Click")
  }
}
