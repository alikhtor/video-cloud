import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-show',
  templateUrl: './page-show.component.html',
  styleUrls: ['./page-show.component.css']
})
export class PageShowComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onSeasons() {
    this.router.navigate(['seasons'], {relativeTo: this.route});
  }

  onEpisodes() {
    this.router.navigate(['episodes'], {relativeTo: this.route});
  }
}
