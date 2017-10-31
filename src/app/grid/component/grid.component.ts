import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import * as _ from 'lodash';

@Component({
  selector: 'eg-grid',
  templateUrl: './grid.component.html',
  styles: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  status:  Array<string> = ['1', '2', '3', '4', '5', '6']
  @Output() closeDownload= new EventEmitter<Array<string>>();
  constructor() { }

  ngOnInit() {
  }
}
