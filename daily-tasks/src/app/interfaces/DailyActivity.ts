import { Activity } from "./Activity";

export interface DailyActivity {
  id: number;
  date: string;
  isComplete: boolean;
  activity: Activity;
}