import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  imports: [],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {

  showHistory():void{
    console.log("Click")
  }
}
