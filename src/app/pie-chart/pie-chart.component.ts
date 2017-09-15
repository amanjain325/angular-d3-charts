import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
declare let d3: any;
declare let $: any;

@Component({
  selector: 'pie-chart',
  styleUrls: ['./pie-chart.component.css'],
  templateUrl: './pie-chart.component.html'
})
export class PieChart1Component {
  public piedata = [{
    id: 0,
    label: 'slice 1',
    percentage: 10,
    value: 10,
    color: 'blue',
  }, {
    id: 1,
    label: 'slice 2',
    percentage: 20,
    value: 20,
    color: 'black',
  }, {
    id: 2,
    label: 'slice 3',
    percentage: 30,
    value: 30,
    color: 'red',
  }];
}