import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-activity',
  imports: [ReactiveFormsModule],
  templateUrl: './update-activity.component.html',
  styleUrl: './update-activity.component.css'
})
export class UpdateActivityComponent {

  activityForm = new FormGroup({
    date: new FormControl('', Validators.required),
    activity: new FormControl('', Validators.required),
    completionStatus: new FormControl('', Validators.required)
  });

  onSubmit() {
    console.log(this.activityForm.value);
  }

}
