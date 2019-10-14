import { Component, OnInit } from '@angular/core';
import { RecomendedShowService } from '../services/recomended-show.service';
import { IShow } from '../models/show/i-show';

@Component({
  selector: 'app-recomended-show',
  templateUrl: './recomended-show.component.html',
  styleUrls: ['./recomended-show.component.css']
})
export class RecomendedShowComponent implements OnInit {
  private powerPuffGirlsId: number = 6771;
  public recomendedShow: IShow;

  constructor(private rss: RecomendedShowService) {
    this.rss.getRecomendedShow(this.powerPuffGirlsId).subscribe((data: IShow) => {
      this.recomendedShow = data;
    });
  }

  ngOnInit() {
  }

}
