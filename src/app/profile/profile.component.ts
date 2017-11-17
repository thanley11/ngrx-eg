import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'eg-profile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-card>
      <mat-card-title>Profile</mat-card-title>
      <mat-card-content>
        <p>This is the profile page</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="primary" routerLink="/">Take Me Home</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    :host {
      text-align: center;
    }
  `]
})
export class ProfileComponent { }
