import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
declare let d3: any;
declare let $: any;

@Component({
  selector: 'stacked-bar-chart',
  styleUrls: ['./stacked-bar-chart.component.css'],
  templateUrl: './stacked-bar-chart.component.html'
})
export class StackedBarChartComponent implements OnInit {

  public obj = {
    0: 'Bar 1',
    1: 'Bar 2',
    2: 'Bar 3',
    3: 'Bar 4',
    4: 'Bar 5',
    5: 'Bar 6',
  };

  public ngOnInit() {
    this.renderChart();
  }

  public renderChart() {
    let chartComponent = this;
    let data = [
      { xAxis: 0, value1: 9, value2: 10, value3: 11 },
      { xAxis: 1, value1: 10, value2: 11, value3: 12 },
      { xAxis: 2, value1: 11, value2: 12, value3: 13 },
      { xAxis: 3, value1: 12, value2: 13, value3: 14 },
      { xAxis: 4, value1: 13, value2: 14, value3: 15 },
      { xAxis: 5, value1: 14, value2: 15, value3: 16 },
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

    let x0 = d3.scale.ordinal()
      .rangeRoundBands([0, width], 0.6);

    let x1 = d3.scale.ordinal();

    let y = d3.scale.linear()
      .range([height, 0]);

    let xAxis = d3.svg.axis()
      .scale(x0)
      .orient('bottom');

    let yAxis = d3.svg.axis()
      .scale(y)
      .orient('left')
      .tickFormat(d3.format(0))
      .innerTickSize(-width)
      .tickPadding(10);

    let color = d3.scale.ordinal()
      .range(['#169fcd', '#f26722', '#cecece']);

    let yBegins;

    let innerColumns = {
      'column1': ['value3'],
      'column2': ['value1', 'value2'],
    };

    let columnHeaders = d3.keys(data[0]).filter((key) => { return key !== 'day'; });
    color.domain(d3.keys(data[0]).filter((key) => { return key !== 'day'; }));
    data.forEach((d: any) => {
      let yColumn = new Array();
      d.columnDetails = columnHeaders.map((value) => {
        for (let ic in innerColumns) {
          if ($.inArray(value, innerColumns[ic]) >= 0) {
            if (!yColumn[ic]) {
              yColumn[ic] = 0;
            }
            yBegins = yColumn[ic];
            yColumn[ic] += +d[value];
            return { name: value, column: ic, yBegin: yBegins, yEnd: +d[value] + yBegins, };
          }
        }
      });

      d.total = d3.max(d.columnDetails, (d1) => {
        return d1 ? d1.yEnd : 0;
      });
    });

    x0.domain(data.map((d: any) => { return chartComponent.obj[d.xAxis]; }));
    x1.domain(d3.keys(innerColumns)).rangeRoundBands([0, x0.rangeBand()]);

    y.domain([0, d3.max(data, (d) => {
      return d.total;
    })]);

    svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis);

    svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.7em')
      .style('text-anchor', 'end')
      .text('');

    svg.selectAll('.y')
      .selectAll('path')
      .style('display', 'none');

    let stackedbars = svg.selectAll('.project_stackedbar')
      .data(data)
      .enter().append('g')
      .attr('class', 'g')
      .attr('transform', (d) => { return 'translate(' + x0(chartComponent.obj[d.xAxis]) + ',0)'; });
    stackedbars.selectAll('rect')
      .data((d) => { return d.columnDetails; })
      .enter().append('rect')
      .attr('width', x1.rangeBand())
      .attr('x', (d) => {
        return x1(d ? d.column : '');
      })
      .style('fill', (d) => {
        return d ? color(d.name) : '';
      })
      .attr('y', height - 1)
      .attr('height', 0)
      .attr('width', '11px')
      .transition()
      .duration(1000)
      .delay(100)
      .attr('y', (d) => {
        return y(d ? d.yEnd : 0);
      })
      .attr('height', (d) => {
        return y(d ? d.yBegin : 0) - y(d ? d.yEnd : 0);
      });
  }
}
