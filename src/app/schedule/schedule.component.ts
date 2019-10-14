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
  public schedule: any;
  constructor(private apiService: ApiService) {
    this.apiService.getSchedule().subscribe((data: any) => {
      console.log(data);
    });
  }

  ngOnInit() {}

}
