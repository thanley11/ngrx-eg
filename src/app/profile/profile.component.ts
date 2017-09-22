import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'eg-profile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <md-card>
      <md-card-title>Profile</md-card-title>
      <md-card-content>
        <p>This is the profile page</p>
      </md-card-content>
      <md-card-actions>
        <button md-raised-button color="primary" routerLink="/">Take Me Home</button>
      </md-card-actions>
    </md-card>
  `,
  styles: [`
    :host {
      text-align: center;
    }
  `]
})
export class ProfileComponent { }
