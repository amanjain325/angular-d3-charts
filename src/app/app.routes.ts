import { Routes } from '@angular/router';
import { DoughnutChartComponent } from './doughnut-chart';
import { PieChartComponent } from './pie-chart';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: DoughnutChartComponent },
  { path: 'doughnutchart',  component: DoughnutChartComponent },
  { path: 'piechart',  component: PieChartComponent },
  { path: '**',  component: DoughnutChartComponent },
];
