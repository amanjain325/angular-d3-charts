import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
declare let d3: any;
declare let $: any;

@Component({
  selector: 'doughnut-chart',
  styleUrls: ['./doughnut-chart.component.css'],
  templateUrl: './doughnut-chart.component.html'
})
export class DoughnutChart1Component {
  public centerImage = '';
  public piedata = [{
    id: 0,
    label: 'slice 1',
    percentage: 10,
    value: 10,
    color: 'blue',
    iconImage: 'assets/img/1.png'
  }, {
    id: 1,
    label: 'slice 2',
    percentage: 20,
    value: 20,
    color: 'black',
    iconImage: 'assets/img/2.png'
  }, {
    id: 2,
    label: 'slice 3',
    percentage: 30,
    value: 30,
    color: 'red',
    iconImage: 'assets/img/3.png'
  }, {
    id: 3,
    label: 'slice 4',
    percentage: 20,
    value: 20,
    color: 'black',
    iconImage: 'assets/img/4.png'
  }, {
    id: 4,
    label: 'slice 5',
    percentage: 20,
    value: 10,
    color: 'red',
    iconImage: 'assets/img/5.png'
  }];
}
