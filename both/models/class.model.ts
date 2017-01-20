import { CollectionObject } from './collection-object.model';

export interface Class_ extends CollectionObject {
  tutorId: string;
  name: string;
  language: string;
  schedule: Schedule;
  maxCapacity?: Number;
  usersIds?: string[];
  active?: boolean;
  tutorEmail?: string;
}

interface Schedule {
  start?: Date;
  end?: Date;
  days?: string[];
}