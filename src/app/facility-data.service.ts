import { Injectable } from '@angular/core';
import { Facility } from './facility';

@Injectable({
  providedIn: 'root',
})
export class FacilityDataService {
  protected facilityList: Facility[] = [
    {
      id: 1,
      room: 'Meeting Room 1',
      capacity: 6,
      image: '../../../assets/facility/rental-office-1.jpg',
    },
    {
      id: 2,
      room: 'Meeting Room 2',
      capacity: 6,
      image: '../../../assets/facility/rental-office-2.jpg',
    },
    {
      id: 3,
      room: 'Meeting Room 3',
      capacity: 6,
      image: '../../../assets/facility/rental-office-3.jpg',
    },
    {
      id: 4,
      room: 'Meeting Room 4',
      capacity: 20,
      image: '../../../assets/facility/rental-office-4.jpg',
    },
    {
      id: 5,
      room: 'Meeting Room 5',
      capacity: 20,
      image: '../../../assets/facility/rental-office-5.jpg',
    },
    {
      id: 6,
      room: 'Meeting Room 6',
      capacity: 20,
      image: '../../../assets/facility/rental-office-6.jpeg',
    },
    {
      id: 7,
      room: 'Activity Room 1',
      capacity: 30,
      image: '../../../assets/facility/activity-room-1.jpeg',
    },
    {
      id: 8,
      room: 'Activity Room 2',
      capacity: 30,
      image: '../../../assets/facility/activity-room-1.jpeg',
    },
  ];
  constructor() {}

  getFacilityList(): Facility[] {
    return this.facilityList;
  }

  getFacilityListById(id: number): Facility | undefined {
    return this.facilityList.find((facility) => facility.id === id);
  }
}
