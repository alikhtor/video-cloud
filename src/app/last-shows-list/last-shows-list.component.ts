import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { Observable } from 'rxjs';
import { IShow } from '../models/show/i-show';

@Component({
  selector: 'app-last-shows-list',
  templateUrl: './last-shows-list.component.html',
  styleUrls: ['./last-shows-list.component.css']
})
export class LastShowsListComponent implements OnInit {
  shows$: Observable<IShow>;
  shows = [];

  constructor(
    private readonly lSService: LocalStorageService
  ) { }

  ngOnInit() {
    this.shows$ = this.lSService.getLastShows();
  }

}
