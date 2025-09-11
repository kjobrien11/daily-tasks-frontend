import { Activity } from "./Activity";

export interface DailyTask {
  id: number;
  date: string;
  isComplete: boolean;
  activity: Activity;
}