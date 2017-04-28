import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import * as _ from 'lodash';

@Component({
  selector: 'eg-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Input() openStatus: boolean;
  @Output() toggleSidenav = new EventEmitter<Object>();
}
//<md-sidenav #start mode="side" opened="false">
  //<md-nav-list>
     //<ng-content></ng-content>
  //</md-nav-list>
//</md-sidenav>


