import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivityService } from '../services/activity.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { ActivityStatus } from '../interfaces/ActivityStatus';
import { NgIf } from '@angular/common';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  constructor(private activityService: ActivityService, @Inject(MAT_DIALOG_DATA) public data: { date: string | null }) { }

  activityStatus: ActivityStatus[] = [];
  searchComplete: boolean = false;

  searchForm = new FormGroup({
    date: new FormControl('', Validators.required)
  });


  ngOnInit(): void {
    if (this.data && this.data.date) {
      this.setDate(this.data.date);
    }
  }
  setDate(newDate:string){
    this.searchForm.patchValue({
      date: newDate
    })

    this.search();
  }

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
