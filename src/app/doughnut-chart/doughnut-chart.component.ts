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
  public centerImage = 'assets/img/6.png';
  public piedata = [{
    id: 0,
    label: 'slice 1',
    value: 10,
    color: 'blue',
  }, {
    id: 1,
    label: 'slice 2',
    value: 20,
    color: 'black',
  }, {
    id: 2,
    label: 'slice 3',
    value: 30,
    color: 'red',
  }, {
    id: 3,
    label: 'slice 4',
    value: 20,
    color: 'black',
  }, {
    id: 4,
    label: 'slice 5',
    value: 10,
    color: 'red',
  }];

  public centerImageEvent() {
  }

}
