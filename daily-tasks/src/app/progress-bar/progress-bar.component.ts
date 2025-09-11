import { Component } from '@angular/core';
import { Progress } from '../interfaces/Progress';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {

  //TODO implement an interface
  progress: Progress = {
    "total": 5,
    "completed": 2,
    "percentage": 40.0
  }

}
