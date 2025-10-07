import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivityService } from '../services/activity.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  constructor(private activityService: ActivityService) { }

  searchForm = new FormGroup({
    date: new FormControl('', Validators.required)
  });

  search(){
    console.log("Searching...")
  }

}
