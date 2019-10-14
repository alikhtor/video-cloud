import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const URL: string = 'http://api.tvmaze.com';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getSchedule() {
    return this.httpClient.get(`${URL}/schedule`);
  }

  getShow(id: number) {
    return this.httpClient.get(`${URL}/shows/${id}`)
  }

}
