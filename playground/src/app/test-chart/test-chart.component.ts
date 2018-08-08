import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single, multi } from '../data';
import * as shape from 'd3-shape';
import * as d3 from 'd3';


@Component({
  selector: 'app-test-chart',
  templateUrl: './test-chart.component.html',
  styleUrls: ['./test-chart.component.css']
})
export class TestChartComponent {

  single: any[];
  multi: any[];

  view: any[] = [600, 200];
  // options
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#aa22a9']
  };

  // pie
  showLabels = false;
  explodeSlices = false;
  doughnut = true;

  // custom chart component
  curves = {
    Basis: shape.curveBasis,
    Step: shape.curveStep,
    'Step After': shape.curveStepAfter,
    'Step Before': shape.curveStepBefore
  };

  // line interpolation
  curveType: string = 'Step';
  curve: any = this.curves[this.curveType];
  interpolationTypes = [
    'Basis',
    'Step',
    'Step After',
    'Step Before'
  ];


  data = [
    {
      'name': 'Germany',
      'value': 46268
    },
    {
      'name': 'USA',
      'value': 53041
    },
    {
      'name': 'France',
      'value': 42503
    },
    {
      'name': 'United Kingdom',
      'value': 41787
    },
    {
      'name': 'Spain',
      'value': 29863
    },
    {
      'name': 'Italy',
      'value': 35925
    }
  ];

  lineChartSeries = [
    {
      name: 'Tablets',
      series: [
        {
          name: 'USA',
          value: 50
        },
        {
          value: 80,
          name: 'United Kingdom'
        },
        {
          value: 85,
          name: 'France'
        },
        {
          value: 90,
          name: 'Japan'
        },
        {
          value: 100,
          name: 'China'
        }
      ]
    },
    {
      name: 'Cell Phones',
      series: [
        {
          value: 10,
          name: 'USA'
        },
        {
          value: 20,
          name: 'United Kingdom'
        },
        {
          value: 30,
          name: 'France'
        },
        {
          value: 40,
          name: 'Japan'
        },
        {
          value: 10,
          name: 'China'
        }
      ]
    },
    {
      name: 'Computers',
      series: [
        {
          value: 2,
          name: 'USA',

        },
        {
          value: 4,
          name: 'United Kingdom'
        },
        {
          value: 20,
          name: 'France'
        },
        {
          value: 30,
          name: 'Japan'
        },
        {
          value: 35,
          name: 'China'
        }
      ]
    }
  ];


  constructor() {
    Object.assign(this, {single, multi});
  }

  onSelect(event) {
    console.log(event);
  }

}
