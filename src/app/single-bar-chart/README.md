<h2>Bar Chart:</h2>
Integrate angular 2 app with interactive Doughnut charts having images on slices.
<a target="_blank" href="https://embed.plnkr.co/i3qi1z/">View Demo</a>

<h2>Steps</h2>
<ul>
  <li>Clone this repository into a new project folder.</li>
  </ul>
<pre>   $ git clone https://github.com/amanjain325/angular-2-d3-charts.git
   $ cd angular-2-d3-charts
   $ npm install
   $ npm start
   Navigate to http://localhost:3000/piechart</pre>

<h2>How to integrate</h2>
<p>Add this script in index.html</p>
<pre>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js" charset="utf-8"></script>
</pre>
<p>Add the css to your style.css</p>
<pre>
.tick text{
  font-size: 12px;
}

.axis path,
.axis line {
  fill: none;
  stroke: #4C5554;
  stroke-width: 1;
}

.x.axis .tick line{
display: none
}

.domain{
    display: block !important;
    stroke: #4C5554 !important;
    stroke-width: 2 !important;
}
</pre>
<h2>Code: </h2>

    public hours = {
      4: '12-4 AM',
      8: '4-8 AM',
      12: '8-12 AM',
      16: '12-4 PM',
      20: '4-8 PM',
      24: '8-12 PM',
    };

    public ngOnInit() {
      this.renderChart();
    }

    public renderChart() {
    let chartComponent = this;
    let data = [
      { hour: 4, data1: 10 },
      { hour: 8, data1: 11 },
      { hour: 12, data1: 13 },
      { hour: 16, data1: 13 }
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

    let svg = d3.select('#singleBarChart')
      .append('svg')
      .attr('width', width + 100)
      .attr('height', height + margin.top + margin.bottom + 2)
      .append('g')
      .attr('transform', 'translate(' + (margin.left + fromLeft) + ',' + margin.top + ')');

    let dataset = d3.layout.stack()(['data1'].map((value) => {
      return data.map((d: any) => {
        return { x: chartComponent.hours[d.hour], y: d.data1 };
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
    let colors = ['#169fcd', '#f26722'];

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
    /* .attr('x', function (d) { return 6; })
    .attr('y', function (d) { return 6; })
    .attr('transform', function (d) {
      return 'rotate(90)'
    }); */

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


<img src="https://raw.githubusercontent.com/amanjain325/angular-2-d3-charts/master/src/assets/img/single-bar-chart-example.png">
