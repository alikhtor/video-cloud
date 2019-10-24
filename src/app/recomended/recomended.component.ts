import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { IShow } from '../models/show/i-show';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recomended',
  templateUrl: './recomended.component.html',
  styleUrls: ['./recomended.component.css']
})
export class RecomendedComponent implements OnInit {
  powerPuffGirlsId = 6771;
  show$: Observable<IShow>;
  show: IShow;

  constructor(private apiService: ApiService) {
    this.show$ = this.apiService.getShow(this.powerPuffGirlsId);
  }

  ngOnInit() {
    this.show$.subscribe((show) => {
      this.show = show;
    });
  }
}
