import { Component, OnInit, Input } from '@angular/core';
import { IShow } from '../models/show/i-show';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  @Input() show: IShow;
  public name: string;
  public type: string;
  public image: string;
  
  constructor() { }

  ngOnInit() {
    this.name = this.show.name;
    this.type = this.show.type;
    this.image = this.show.image.medium;
  }

}
