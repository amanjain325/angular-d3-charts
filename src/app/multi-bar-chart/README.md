<h2>Multi Bar Chart:</h2>
Integrate angular 2 app with interactive Multi Bar chart having transitions on loading.
<a target="_blank" href="https://embed.plnkr.co/YXzgfy/">View Demo</a>

<h2>Steps</h2>

<p>Script in index.html</p>
<pre>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js" charset="utf-8"></script>
</pre>

<ul>
  <li>Clone this repository into a new folder.</li>
  </ul>
<pre>   $ git clone https://github.com/amanjain325/angular-2-d3-charts.git
   $ cd angular-2-d3-charts
   $ npm install
   $ npm start
   Navigate to http://localhost:3000/multibarchart</pre>

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
<img src="https://raw.githubusercontent.com/amanjain325/angular-2-d3-charts/master/src/assets/img/multi-bar-chart-example.png">
