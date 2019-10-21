import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service/api.service';
import { IShow } from '../models/show/i-show';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recomended',
  templateUrl: './recomended.component.html',
  styleUrls: ['./recomended.component.css']
})
export class RecomendedComponent implements OnInit {
  powerPuffGirlsId: number = 6771;
  show$: Observable<IShow>;
  
  constructor(private apiService: ApiService) {
    this.show$ = this.apiService.getShow(this.powerPuffGirlsId);
  }

  ngOnInit() {
  }

}
