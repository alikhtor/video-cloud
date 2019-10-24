import { Injectable } from '@angular/core';
import { IShow } from '../models/show/i-show';
import { ApiService } from './api.service';
import { from } from 'rxjs';
import { concatMap, map, mergeAll } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly storageKey = 'videoCloud';

  constructor(private apiService: ApiService) {}

  public setLastShow(show: IShow) {
    const storage = (localStorage.getItem(this.storageKey)) ?
      localStorage.getItem(this.storageKey).split(',') : [];
    if (storage.length < 5) {
      if (localStorage.getItem(this.storageKey) &&
        localStorage.getItem(this.storageKey).indexOf(show.id.toString()) === -1) {
          storage.unshift(show.id.toString());
      }
      } else {
        if (localStorage.getItem(this.storageKey) &&
          localStorage.getItem(this.storageKey).indexOf(show.id.toString()) === -1) {
            storage.pop();
            storage.unshift(show.id.toString());
        }
      }
    if (storage.length === 0) {
        storage.push(show.id.toString());
    }
    localStorage.setItem(this.storageKey, storage.join(','));
  }

  public getLastShows() {
    const storage = localStorage.getItem(this.storageKey).split(',');
    if (storage.length > 0) {
      return from(storage).pipe(
        map(id => this.apiService.getShow(Number(id))),
        mergeAll()
      );
    }
  }
}
