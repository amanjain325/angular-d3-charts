import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
  <ol>
  <li>
  <a routerLink="/doughnutchart">Doughnut Chart</a>
  </li>
  <li>  
  <a routerLink="/piechart">Pie Chart</a>
  </li>
  <li>  
  <a routerLink="/singlebarchart">Single Bar Chart / Bar Chart</a>
  </li>
  <li>  
  <a routerLink="/multibarchart">Multi Bar Chart</a>
  </li>
  </ol>
      <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(
    public appState: AppState
  ) { }
}
