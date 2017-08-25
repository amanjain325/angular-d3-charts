import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
      <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(
    public appState: AppState
  ) { }
}
