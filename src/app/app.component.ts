import { Component, Output, Input, EventEmitter } from '@angular/core';
import { IShow } from './models/show/i-show';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  keys: string[];

  getLocalStorageKeys($keys: string[]) {
    this.keys = $keys;
  }
}