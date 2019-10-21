import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ISchedule } from '../models/schedule/i-schedule';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  scheduleShows$: Observable<ISchedule[]>;

  constructor(private apiService: ApiService) {
    this.scheduleShows$ = this.apiService.getSchedule();
  }

  ngOnInit() {
  }

  addToLocal(scheduleShow: ISchedule) {
    console.log(scheduleShow);
  }
}
