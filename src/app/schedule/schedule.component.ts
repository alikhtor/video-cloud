import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api-service/api.service';
import { ISchedule } from '../models/schedule/i-schedule';
import { Observable } from 'rxjs';
// import { IShow } from '../models/show/i-show';

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

  addToLocal(scheduleShow: ISchedule){
    if (localStorage.length < 5) {
      console.log("111");
      
      localStorage.setItem(scheduleShow.show.id.toString(),
      JSON.stringify(scheduleShow.show)
      )
    }
  }

  


}
