import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single, multi } from '../data';


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

  constructor() {
    Object.assign(this, {single, multi});
  }

  onSelect(event) {
    console.log(event);
  }


}
