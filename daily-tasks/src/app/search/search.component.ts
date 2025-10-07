import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivityService } from '../services/activity.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { ActivityStatus } from '../interfaces/ActivityStatus';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  constructor(private activityService: ActivityService) { }

  activityStatus: ActivityStatus[] = [];
  searchComplete: boolean = false;

  searchForm = new FormGroup({
    date: new FormControl('', Validators.required)
  });

  search() {
    this.activityService.getActivitesByDate(this.searchForm.value.date!).subscribe(data => {
      this.activityStatus = data;


      if (this.activityStatus.length == 0) {
        this.searchComplete = false;
      } else {
        this.searchComplete = true;
      }
    });


  }

}
