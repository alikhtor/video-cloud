import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IShow } from '../models/show/i-show';
import { ISchedule } from '../models/schedule/i-schedule';
import { take } from 'rxjs/operators';

const URL: string = 'http://api.tvmaze.com';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getSchedule() {
    return this.httpClient.get<ISchedule[]>(`${URL}/schedule`);
  }

  getShow(id: number) {
    return this.httpClient.get<IShow>(`${URL}/shows/${id}`);
  }
  
  getSeasons(id: number) {
    return this.httpClient.get(`${URL}/shows/${id}/seasons`)
  }
}
 