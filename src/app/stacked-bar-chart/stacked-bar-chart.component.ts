import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
declare let d3: any;
declare let $: any;

@Component({
  selector: 'stacked-bar-chart',
  styleUrls: ['./stacked-bar-chart.component.css'],
  templateUrl: './stacked-bar-chart.component.html'
})
export class StackedBarChartComponent {

  public colors = ['red', 'green', 'blue']
  public dataColumns = [3]; // Stacked Bar Chart
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
