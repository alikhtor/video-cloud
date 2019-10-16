import { Component, OnInit, Input } from '@angular/core';
import { IShow } from '../models/show/i-show';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  @Input() show: IShow;
  
  constructor() { }

  ngOnInit() {
  }

}
