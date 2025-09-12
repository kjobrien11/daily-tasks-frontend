import { Component, OnInit } from '@angular/core';
import { Progress } from '../interfaces/Progress';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent implements OnInit{

  progress!: Progress;

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.loadProgressStatus();
  }

  loadProgressStatus(): void{
    this.activityService.getTodaysProgress().subscribe(data => this.progress = data);
  }

}
