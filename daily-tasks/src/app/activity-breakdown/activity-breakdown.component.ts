import { Component, Input } from '@angular/core';
import { ActivityBreakdown } from '../interfaces/ActivityBreakdown';
import { NgFor } from '@angular/common';

@Component({
  selector: 'tr[app-activity-breakdown]',
  imports: [NgFor],
  templateUrl: './activity-breakdown.component.html',
  styleUrl: './activity-breakdown.component.css'
})
export class ActivityBreakdownComponent {

@Input() data!: ActivityBreakdown;
}
