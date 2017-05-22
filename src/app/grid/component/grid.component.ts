import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import * as _ from 'lodash';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styles: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() status:  Array<string>;
  @Output() closeDownload= new EventEmitter<Array<string>>();
  constructor() { }

  ngOnInit() {
  }
public isBasketType(type) {
      return type === 'basket';
    }

    // public isEmptyOrders() {
    //   return _.isEqual(this.status, {orders: {}});
    // }
}
