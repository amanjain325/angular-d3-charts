import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
declare let d3: any;
declare let $: any;

@Component({
  selector: 'single-bar-chart',
  styleUrls: ['./single-bar-chart.component.css'],
  templateUrl: './single-bar-chart.component.html'
})
export class SingleBarChartComponent {
 
  public colors = ['red', 'green', 'blue']
  public dataColumns = [1];
  public barChartData = [{
    id: 0,
    label: 'label1',
    value1: 10,
    value2: 10,
    value3: 10,
  }, {
    id: 1,
    label: 'label2',
    value1: 10,
    value2: 10,
    value3: 10,
  }]
}
