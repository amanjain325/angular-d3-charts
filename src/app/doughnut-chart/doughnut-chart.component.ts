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

  bardata = [
    { label: 'Bar 1', value: 10, value2: 10, value3: 12 },
    { label: 'Bar 2', value: 11, value2: 10, value3: 12 },
    { label: 'Bar 3', value: 12, value2: 10, value3: 12 },
    { label: 'Bar 4', value: 12, value2: 10, value3: 12 },
    { label: 'Bar 5', value: 11, value2: 10, value3: 12 },
    { label: 'Bar 6', value: 10, value2: 10, value3: 12 },
  ];

  ngOnInit() {
    let valueArray = [];
    for (let i = 1; i < 3; i++) {
      valueArray.push('value' + i);
    }
    console.log(valueArray);
  }

  public centerImageEvent() {
  }

}
