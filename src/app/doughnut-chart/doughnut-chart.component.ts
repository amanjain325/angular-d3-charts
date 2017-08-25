import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
declare let d3: any;
declare let $: any;

@Component({
  selector: 'doughnut-chart',
  styleUrls: ['./doughnut-chart.component.css'],
  templateUrl: './doughnut-chart.component.html'
})
export class DoughnutChartComponent implements OnInit {
  public selectedId: any;
  public images: Object = {
    2: 'assets/img/flush_final.png',
    4: 'assets/img/Other_final.png',
    8: 'assets/img/faucet_final.png',
    10: 'assets/img/shower_final.png',
    20: 'assets/img/Irrigation_final.png',
  };
  public slicesImages: Object = {
    2: 'assets/img/flushSlice.png',
    4: 'assets/img/others_slice.png',
    8: 'assets/img/faucet_slice.png',
    10: 'assets/img/showerSlice.png',
    20: 'assets/img/irrigationSlice.png',
  };
  public colorSelect: Object = {
    2: '#ff8000',
    4: '#FF0000',
    8: '#00EE00',
    10: '#0033CC',
    20: '#FFC00'
  };

  public ngOnInit() {
    this.renderChart();
  }

  public renderChart() {
    let chartComponent = this;

    let imageWidth = 40;
    let imageHeight = 40;
    let width = 400;
    let height = 400;
    let radius = 250;
    let piedata = [{
      event: 2,
      id: 0,
      label: 'slice 1',
      percentage: 10,
      value: 10,

    }, {
      event: 4,
      id: 1,
      label: 'slice 2',
      percentage: 20,
      value: 20,

    }, {
      event: 8,
      id: 2,
      label: 'slice 3',
      percentage: 30,
      value: 30,

    }, {
      event: 10,
      id: 3,
      label: 'slice 4',
      percentage: 20,
      value: 20,

    }, {
      event: 20,
      id: 4,
      label: 'slice 5',
      percentage: 20,
      value: 10,

    }];

    let pie = d3.layout.pie()
      .startAngle(Math.PI / 2)
      .endAngle(Math.PI * 2 + Math.PI / 2)
      .value((d) => {
        return d.value;
      }).sort(null);

    let arc = d3.svg.arc()
      .outerRadius(150)
      .innerRadius(70);

    let arcNew = d3.svg.arc()
      .outerRadius(160)
      .innerRadius(70);

    let svg = d3.select('#pieChart').append('svg')
      .attr('width', 330)
      .attr('height', 330)
      .append('g')
      .attr('transform', 'translate(' + (width - radius + 10) + ',' + (height - radius + 10) + ')');

    let g = svg.selectAll('.arc')
      .data(pie(piedata))
      .enter().append('g')
      .attr('class', 'arc');

    g.append('path')
      .attr('d', arc)
      .style('stroke', 'white').style('fill', function (d, i) {
        return chartComponent.colorSelect[d.data.event];
      })
      .attr('id', function (d) {
        return 'iconId' + d.data.event;
      })
      .attr('cursor', 'pointer')
      .on('click', function (d) {
        d3.selectAll('path').transition()
          .duration(50)
          .attr('d', function (d) {
            console.log(d, '21');
            if (this.selectedId === d.data.id) {
              d.data.expanded = true;
              this.selectedId = null;
              return arc(d);
            } else {
              d.data.expanded = false;
              this.selectedId = null;
              return arc(d);
            }
          })
        d3.select(this).transition()
          .duration(50)
          .attr('d', function (d) {
            console.log(d, '22');
            if (d.data.expanded) {
              this.selectedId = null;
              d.data.expanded = false;
              return arc(d);
            } else {
              d.data.expanded = true;
              this.selectedId = d.data.id;
              return arcNew(d);
            }
          });
      });
    //     .transition().delay(function (d, i) { return i * 200; }).duration(100)
    // .attrTween('d', function (d) {
    //     let i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
    //     return function (t) {
    //         d.endAngle = i(t);
    //         return arc(d);
    //     }
    // });

    g.append('g')
      .attr('transform', function (d) {
        return 'translate(' + arc.centroid(d) + ')';
      })
      .append('svg:image')
      .attr('xlink:href', function (d) {
        if (d.data.percentage > 8) {
          return chartComponent.slicesImages[d.data.event];
        } else {
          return null;
        }
      })
      .attr('id', function (d) {
        return chartComponent.slicesImages[d.data.event];
      })
      .attr('width', imageWidth)
      .attr('height', imageHeight)
      .attr('x', -1 * imageWidth / 2)
      .attr('y', -1 * imageHeight / 2)
      .attr('cursor', 'pointer')
      .on('click', function (d) {
        d3.selectAll('path').transition()
          .duration(50)
          .attr('d', function (d) {
            if (this.selectedId == d.data.id) {
              d.data.expanded = true;
              this.selectedId = null;
              return arc(d);
            } else {
              d.data.expanded = false;
              this.selectedId = null;
              return arc(d);
            }
          });

        d3.select('path#iconId' + d.data.event).transition()
          .duration(50)
          .attr('d', function (d) {
            if (d.data.expanded) {
              this.selectedId = null;
              d.data.expanded = false;
              return arc(d);
            } else {
              d.data.expanded = true;
              this.selectedId = d.data.id;
              return arcNew(d);
            }
          });
      });

    svg.append('svg:image')
      .attr('id', 'center_image')
      .attr('x', -60)
      .attr('y', -60)
      .attr('width', 120)
      .attr('height', 120)
      .attr('cursor', 'pointer');

    g.on('click', function click(d) {
      if (d.data.expanded) {
        d3.select('#centerData').style('display', 'block');
        $('#slice_image').attr('src', d.data.image);
        $('#slice_value').text(d.data.label + '\n' +
          d.data.value + '\n' +
          Math.round(d.data.percentage) + '%');
      } else {
        d3.select('#centerData').style('display', 'none');
      }
    });

    $('#pieChart').ready(() => {
      $('#center_image').bind('click', (event) => {
        alert('1');
      });
    });
  }
}
