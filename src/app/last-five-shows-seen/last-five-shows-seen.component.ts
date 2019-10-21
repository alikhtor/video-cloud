import { Component, OnInit, Input } from '@angular/core';
import { IShow } from '../models/show/i-show';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-last-five-shows-seen',
  templateUrl: './last-five-shows-seen.component.html',
  styleUrls: ['./last-five-shows-seen.component.css']
})
export class LastFiveShowsSeenComponent implements OnInit {
  lastShows: Observable<IShow[]>;

  constructor() {}

  ngOnInit() {
    // if (localStorage.length) {
    //   for (let i=0; i< localStorage.length; i++) {
    //     console.log("222");
    //     this.lastShows = of(Array.prototype.push(
    //       JSON.parse(localStorage.getItem(localStorage.key(i)))
    //     ));
    //   }
    // }
  }

}
