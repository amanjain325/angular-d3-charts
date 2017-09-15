Integrate angular 2 app with interactive d3 charts e.g. Doughnut, Pie, Single Bar chart, Multiple bar chart and Stacked bar chart.

Beautiful charts for Angular2 based on d3.js

## Getting Started
    npm install angular-d3-charts --save
    
**Notice**: the latest version on NPM may not reflect the branch `master`. Open an issue and tag me if you need it to be published.

## Configuration

Add d3 script to your index.html
```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js" charset="utf-8"></script>
```

Ensure you import the module:

```javascript
import { DoughnutChartComponent, PieChartComponent } from 'angular-d3-charts'; // this is needed!

@NgModule({
   declarations: [ 
   DoughnutChartComponent, 
   PieChartComponent, 
   ...OtherModules 
   ] // along with your other modules
})
export class AppModule {}
```
## Usage
## Doughnut Chart: 
```ts
<angular-d3-donut [data]="donutChartData" ></angular-d3-donut>   
```
```ts
donutChartData = [{
      id: 0, // number
      label: 'label name',  // string
      value: value,  // number
      color: 'color of slice',  // string,
      iconImage: 'path of image' // string
   },
      id: 1, // number
      label: 'label name',  // string
      value: value,  // number
      color: 'color of slice',  // string,
      iconImage: 'path of image' // string
   }, ...
   ]
```

## Attributes

### Attributes of angular-d3-donut are

It can contain the following properties.
## Input
| Option        | Default       | Type   | Description  |
| :------------ | :------------ | :----- | :--------- |
| __outerRadius__     | 150 | Number | Outer radius of the donut chart. (Recommended to not to larger than 150) |
| __innerRadius__   |  70 |  Number | Inner radius of the donut chart. |
| __data__    | Not set | Object | As above mentioned |
| __centerImage__   |  Not set |  String | Path of center image in donut. |
| __spreadSlice__    | False | Boolean | If you want to spread out the slide.
| __iconWidth__    | 40 | Number | Width of the icon images on slices.
| __iconHeight__    | 40 | Number | Height of the icon images on slices.

## Output
| Option |Description |
| :------------ |:--------- |
| __centerImageEvent__ | When cemter image is clicked, the centerImageEvent function triggers.  |


```ts
<angular-d3-donut [spreadSlice]=true [centerImage]='centerImage' [data]="donutChartData" (centerImageEvent)="centerImageEvent()"></angular-d3-donut>
```

```ts
<angular-d3-donut [outerRadius]=100 [innerRadius]=80 [spreadSlice]=true [data]="piedata" (centerImageEvent)="centerImageEvent()"></angular-d3-donut>
```

```ts
In your.component.ts file write
public centerImageEvent() {
 // Perform action here
}
```

## Pie Chart: 
```ts
<angular-d3-pie [data]="pieChartData" ></angular-d3-pie>   
```
```ts
pieChartData = [{
      id: 0, // number
      label: 'label name',  // string
      value: value,  // number
      color: 'color of slice',  // string,
   },
      id: 1, // number
      label: 'label name',  // string
      value: value,  // number
      color: 'color of slice',  // string,
   }, ... ]
```

## Attributes

### Attributes of angular-d3-pie are

It can contain the following properties.
## Input
| Option        | Default       | Type   | Description  |
| :------------ | :------------ | :----- | :--------- |
| __outerRadius__     | 150 | Number | Outer radius of the donut chart. (Recommended to not to larger than 150) |
| __data__    | Not set | Object | As above mentioned |
| __spreadSlice__    | False | Boolean | If you want to spread out the slide.

```ts
<angular-d3-pie [spreadSlice]=true [data]="pieChartData" [outerRadius]=90></angular-d3-pie>
```
