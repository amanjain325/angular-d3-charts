import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
declare let d3: any;
declare let $: any;

@Component({
  selector: 'single-bar-chart',
  styleUrls: ['./single-bar-chart.component.css'],
  templateUrl: './single-bar-chart.component.html'
})
export class SingleBarChartComponent implements OnInit {

  public ngOnInit() {
    this.renderChart();
  }

  public renderChart() {
    let data = [
      { label: 'Bar 1', value: 10 },
      { label: 'Bar 2', value: 11 },
      { label: 'Bar 3', value: 12 },
      { label: 'Bar 4', value: 12 },
      { label: 'Bar 5', value: 11 },
      { label: 'Bar 6', value: 10 },
    ];
    let margin = { top: 20, right: 160, bottom: 35, left: 0 };
    let width = 700;
    let height = 400;
    let fromLeft = 40;
    let colors = 'red';
    let transitionDuration = 1000;
    let transitionDelay = 100;
    let barWidth = '14px';
    let yAxisd3Format = '.1S';
    let svg = d3.select('#barChart')
      .append('svg')
      .attr('width', width + 100)
      .attr('height', height + margin.top + margin.bottom + 2)
      .append('g')
      .attr('transform', 'translate(' + (margin.left + fromLeft) + ',' + margin.top + ')');

    let dataset = d3.layout.stack()(['value'].map((value) => {
      return data.map((d: any) => {
        return { x: d.label, y: d.value };
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

    let yAxis = d3.svg.axis()
      .scale(y)
      .orient('left')
      .ticks(10)
      .tickSize(-width, 0, 0)
      .tickFormat(d3.format(yAxisd3Format));

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
      .style('fill', (d, i) => {
        return colors;
      });
    let rect = groups.selectAll('rect')
      .data((d) => { return d; })
      .enter()
      .append('rect')
      .attr('x', (d) => { return x(d.x); })
      .attr('y', height - 1)
      .attr('height', 0)
      .attr('width', barWidth)
      .transition()
      .duration(transitionDuration)
      .delay(transitionDelay)
      .attr('y', (d) => { return y(d.y0 + d.y); })
      .attr('height', (d) => { return y(d.y0) - y(d.y0 + d.y); });
  }
}
