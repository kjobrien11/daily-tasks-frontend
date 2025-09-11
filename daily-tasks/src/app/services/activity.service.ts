import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { DailyActivity } from '../interfaces/DailyActivity';
import { CompleteActivityRequest } from '../interfaces/CompleteActivityRequest';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private apiUrl = 'http://localhost:8080/activities';

  constructor(private http: HttpClient) { }

  getTodaysActivities(): Observable<DailyActivity[]> {
   return this.http.get<DailyActivity[]>(`${this.apiUrl}/today`);
  }

  markActitivityComplete(activity: CompleteActivityRequest){
    console.log(activity)
    return this.http.post<DailyActivity>(`${this.apiUrl}/today/complete`, activity);
  }

  markActitivityUnComplete(activity: CompleteActivityRequest){
    console.log(activity)
    return this.http.post<DailyActivity>(`${this.apiUrl}/today/uncomplete`, activity);
  }

}
