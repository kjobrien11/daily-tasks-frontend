import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DailyActivity } from '../interfaces/DailyActivity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private apiUrl = 'http://localhost:8080/activities';

  constructor(private http: HttpClient) { }

  getTodaysActivities(): Observable<DailyActivity[]> {
    return this.http.get<DailyActivity[]>(`${this.apiUrl}/today`);
  }

}
