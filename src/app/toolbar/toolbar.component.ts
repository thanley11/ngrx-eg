import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'eg-toolbar',
  template: 
  `<md-toolbar color="primary">
      <button md-icon-button (click)="openSidenav.emit()">
        <md-icon>menu</md-icon>
      </button>
      <ng-content></ng-content>
    </md-toolbar>`

})
export class ToolbarComponent {
     @Output() openSidenav = new EventEmitter();
}

