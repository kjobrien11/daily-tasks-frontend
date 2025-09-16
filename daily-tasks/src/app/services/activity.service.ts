import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { DailyActivity } from '../interfaces/DailyActivity';
import { CompleteActivityRequest } from '../interfaces/CompleteActivityRequest';
import { Progress } from '../interfaces/Progress';
import { WeeklyHistory } from '../interfaces/WeekHistory';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private apiUrl = 'http://localhost:8080/activities';

  constructor(private http: HttpClient) { }

  getTodaysActivities(): Observable<DailyActivity[]> {
   return this.http.get<DailyActivity[]>(`${this.apiUrl}/today`);
  }

  getWeekHistory(): Observable<WeeklyHistory[]> {
   return this.http.get<WeeklyHistory[]>(`${this.apiUrl}/last-eight-days`);
  }

  markActitivityComplete(activity: CompleteActivityRequest) : Observable<DailyActivity>{
    return this.http.post<DailyActivity>(`${this.apiUrl}/today/complete`, activity);
  }

  markActitivityUnComplete(activity: CompleteActivityRequest): Observable<DailyActivity>{
    return this.http.post<DailyActivity>(`${this.apiUrl}/today/uncomplete`, activity);
  }

  getTodaysProgress(): Observable<Progress>{
    return this.http.get<Progress>(`${this.apiUrl}/today/progress`);
  }

  getStreak(): Observable<number>{
    return this.http.get<number>(`${this.apiUrl}/streak`);
  }

}
