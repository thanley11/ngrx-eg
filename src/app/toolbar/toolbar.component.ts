import { Component, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../core/auth/auth.service';

@Component({
  selector: 'eg-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css'],

})
export class ToolbarComponent {
  @Output() openSidenav = new EventEmitter();
  constructor(
    private authenticationService: AuthenticationService) {
  }

  logout() {
    this.authenticationService.logout();
  }
}
