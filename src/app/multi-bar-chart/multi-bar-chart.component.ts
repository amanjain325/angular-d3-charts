import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
declare let d3: any;
declare let $: any;

@Component({
  selector: 'multi-bar-chart',
  styleUrls: ['./multi-bar-chart.component.css'],
  templateUrl: './multi-bar-chart.component.html'
})
export class MultiBarChartComponent implements OnInit {

  public ngOnInit() {
    this.renderChart();
  }

  public renderChart() {
    let obj = {
      0: 'Bar 1',
      1: 'Bar 2',
      2: 'Bar 3',
      3: 'Bar 4',
      4: 'Bar 5',
      5: 'Bar 6',
    };

    let data = [
      { xAxis: 0, value: 10, value2: 10, value3: 12 },
      { xAxis: 1, value: 11, value2: 10, value3: 12 },
      { xAxis: 2, value: 12, value2: 10, value3: 12 },
      { xAxis: 3, value: 12, value2: 10, value3: 12 },
      { xAxis: 4, value: 11, value2: 10, value3: 12 },
      { xAxis: 5, value: 10, value2: 10, value3: 12 },
    ];
    let margin = {
      top: 20,
      right: 160,
      bottom: 35,
      left: 0
    };
    let width = 700;
    let height = window.innerHeight / 1.8;
    let fromLeft = 40;

    let svg = d3.select('#barChart')
      .append('svg')
      .attr('width', width + 100)
      .attr('height', height + margin.top + margin.bottom + 2)
      .append('g')
      .attr('transform', 'translate(' + (margin.left + fromLeft) + ',' + margin.top + ')');

    let dataset = d3.layout.stack()(['value1', 'value2', 'value3'].map((value) => {
      return data.map((d: any) => {
        return { x: obj[d.xAxis], y: d.value };
      });
    }));

    let x = d3.scale.ordinal()
      .domain(dataset[0].map((d) => { return d.x; }))
      .rangeBands([0, width], 1);

    let y = d3.scale.linear()
      .domain([0, d3.max(dataset, (d) => {
        return d3.max(d, (d1) => { return d1.y0 + d1.y; });
      })])
      .range([height, 0]);
    let colors = ['#169fcd', '#f26722', '#cecece'];

    let yAxis = d3.svg.axis()
      .scale(y)
      .orient('left')
      .ticks(10)
      .tickSize(-width, 0, 0)
      .tickFormat(d3.format('.1S'));

    let xAxis = d3.svg.axis()
      .scale(x)
      .orient('bottom');

    svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis);
    svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis);

    svg.selectAll('.x')
      .selectAll('text');

    svg.selectAll('.y')
      .selectAll('path')
      .style('display', 'none');

    let groups = svg.selectAll('g.cost')
      .data(dataset)
      .enter().append('g')
      .attr('class', 'cost')
      .style('fill', (d, i) => { return colors[i]; });
    let rect = groups.selectAll('rect')
      .data((d) => { return d; })
      .enter()
      .append('rect')
      .attr('x', (d) => { return x(d.x); })
      .attr('y', height - 1)
      .attr('height', 0)
      .attr('width', '11px')
      .transition()
      .duration(1000)
      .delay(100)
      .attr('y', (d) => { return y(d.y0 + d.y); })
      .attr('height', (d) => { return y(d.y0) - y(d.y0 + d.y); });
  }
}
