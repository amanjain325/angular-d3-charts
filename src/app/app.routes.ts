import { Routes } from '@angular/router';
import { DoughnutChart1Component } from './doughnut-chart';
import { PieChart1Component } from './pie-chart';
import { SingleBarChartComponent } from './single-bar-chart';
import { MultiBarChartComponent } from './multi-bar-chart';
import { StackedBarChartComponent } from './stacked-bar-chart';
import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: DoughnutChart1Component },
  { path: 'doughnutchart',  component: DoughnutChart1Component },
  { path: 'piechart',  component: PieChart1Component },
  { path: 'singlebarchart',  component: SingleBarChartComponent },
  { path: 'multibarchart',  component: MultiBarChartComponent },
  { path: 'stackedbarchart',  component: StackedBarChartComponent },
  { path: '**',  component: DoughnutChart1Component },
];
