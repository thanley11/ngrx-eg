import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'eg-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css'],

})
export class ToolbarComponent {
     @Output() openSidenav = new EventEmitter();
}
