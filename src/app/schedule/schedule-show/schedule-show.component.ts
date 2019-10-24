import { Component, OnInit, Input } from '@angular/core';
import { ISchedule } from 'src/app/models/schedule/i-schedule';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule-show',
  templateUrl: './schedule-show.component.html',
  styleUrls: ['./schedule-show.component.css']
})
export class ScheduleShowComponent implements OnInit {
  @Input() scheduleShow: ISchedule;

  constructor(
    private readonly lSService: LocalStorageService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onShowDetailed(scheduleShow: ISchedule) {
    this.lSService.setLastShow(scheduleShow.show);
    console.log(scheduleShow.show);
    this.router.navigate(['/show', scheduleShow.show.id.toString()],
    {
      relativeTo: this.route
    });
  }
}
