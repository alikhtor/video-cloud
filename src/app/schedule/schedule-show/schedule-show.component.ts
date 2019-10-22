import { Component, OnInit, Input } from '@angular/core';
import { ISchedule } from 'src/app/models/schedule/i-schedule';

@Component({
  selector: 'app-schedule-show',
  templateUrl: './schedule-show.component.html',
  styleUrls: ['./schedule-show.component.css']
})
export class ScheduleShowComponent implements OnInit {
  @Input() scheduleShow: ISchedule;

  constructor() { }

  ngOnInit() {
  }

}
