import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RecomendedShowService {

  constructor(private apiService: ApiService) { }

  getRecomendedShow(id: number) {
    return this.apiService.getShow(id);
  }
}
