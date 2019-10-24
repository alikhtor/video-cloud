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
  scheduleShowsArray: ISchedule[];

  constructor(
    private readonly apiService: ApiService
    ) {
    this.scheduleShows$ = this.apiService.getSchedule();
  }

  ngOnInit() {
    this.scheduleShows$.subscribe((ss) => {
      this.scheduleShowsArray = ss.slice(0, 5);
    });
  }

}
