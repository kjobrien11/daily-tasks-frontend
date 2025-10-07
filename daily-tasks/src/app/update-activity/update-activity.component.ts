import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivityService } from '../services/activity.service';
import { UpdateActivity } from '../interfaces/UpdateActivity';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-update-activity',
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './update-activity.component.html',
  styleUrl: './update-activity.component.css'
})
export class UpdateActivityComponent {

  constructor(private activityService: ActivityService) { }

  activityForm = new FormGroup({
    date: new FormControl('', Validators.required),
    activityId: new FormControl<number | null>(null, Validators.required),
    complete: new FormControl<boolean | null>(null, Validators.required)
  });

  activities = [
    { id: 1, name: 'Read 1 Page' },
    { id: 2, name: 'Exercise 2 Minutes' },
    { id: 3, name: 'Career Work 2 Minutes' },
    { id: 4, name: 'Reflect 2 Minutes' },
    { id: 5, name: 'Gratitude 3 Things' }
  ];

  onSubmit() {
    if (this.activityForm.valid) {
      const dto: UpdateActivity = {
        date: this.activityForm.value.date!,
        activityId: this.activityForm.value.activityId!,
        complete: this.activityForm.value.complete!
      };

      this.activityService.updateActivity(dto).subscribe({
        next: (response) => {
          console.log('Activity updated:', response);
          this.activityService.notifyProgressUpdated();
        },
        error: (err) => {
          console.error('Error updating activity:', err);
        }
      });      
    }
  }


}
