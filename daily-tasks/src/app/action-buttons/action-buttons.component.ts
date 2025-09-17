import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';
import { MatDialog } from '@angular/material/dialog';
import { HistoryPopupComponent } from '../history-popup/history-popup.component';

@Component({
  selector: 'app-action-buttons',
  imports: [],
  templateUrl: './action-buttons.component.html',
  styleUrl: './action-buttons.component.css'
})
export class ActionButtonComponent implements OnInit {

  streak: number = 0;

  constructor(private activityService: ActivityService, private popUp: MatDialog) { }

  ngOnInit(): void {
    this.loadStreak();
  }

  loadStreak(): void{
    this.activityService.getStreak().subscribe(data => this.streak = data);
  }

  showHistory():void{
    console.log("Click")
  }

  openDialog() {
    this.popUp.open(HistoryPopupComponent, {
      width: '95vw',
      height: '90vh',
      maxWidth: '100vw',
      data: { message: 'Hello from the popup!' }
    });
  }


}
