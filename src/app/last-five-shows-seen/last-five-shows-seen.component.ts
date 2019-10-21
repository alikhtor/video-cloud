import { Component, OnInit } from '@angular/core';
import { IShow } from '../models/show/i-show';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-last-five-shows-seen',
  templateUrl: './last-five-shows-seen.component.html',
  styleUrls: ['./last-five-shows-seen.component.css']
})
export class LastFiveShowsSeenComponent implements OnInit {
  lastShows: Observable<IShow[]>;

  constructor() {}

  ngOnInit() {

  }

}
