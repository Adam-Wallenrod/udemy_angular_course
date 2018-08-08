import { Component, Input, OnChanges } from '@angular/core';
import { BaseChartComponent, ColorHelper } from '@swimlane/ngx-charts'
import * as d3 from 'd3';

@Component({
  selector: 'app-custom-chart',
  //templateUrl: './custom-chart.component.html',
  template: `<ngx-charts-chart
    [view]="[width, height]"
    [showLegend]="false"
    style="padding:60px;">
    <svg:g ngx-charts-x-axis
           [xScale]="xScale"
           [dims]="dims"
           [showLabel]="true"
           [labelText]="'X values'"
    >
    </svg:g>
    <svg:g ngx-charts-y-axis
           [yScale]="yScale"
           [dims]="dims"
           [showGridLines]="true"
           [showLabel]="true"
           [labelText]="'Y values'"
           [tickFormatting]="yAxisTickFormatting"
           (dimensionsChanged)="updateYAxisWidth($event)">
    </svg:g>
    <svg:g class="bar-chart chart">
      <svg:g
        ngx-charts-series-vertical
        [xScale]="xScale"
        [yScale]="yScale"
        [colors]="colors"
        [series]="results"
        [dims]="dims">
      </svg:g>
    </svg:g>
  </ngx-charts-chart>`,
  styleUrls: ['./custom-chart.component.css']
})
export class CustomChartComponent extends BaseChartComponent
  implements OnChanges {

  dims: any;
  xScale: any;
  yScale: any;
  xDomain: any;
  yDomain: any;
  colors: ColorHelper;
  colorScheme: any = 'cool';

  @Input() view;
  @Input() results;



  ngOnChanges() {
    this.update();
  }

  update() {
    super.update();
    this.dims = {
      width: this.width,
      height: this.height
    };
    this.xScale = this.getXScale();
    this.yScale = this.getYScale();
    this.setColors();
  }

  getXScale() {
    const spacing = 0;
    this.xDomain = this.getXDomain();
    return d3.scaleBand()
      .rangeRound([0, this.dims.width])
      .paddingInner(spacing)
      .domain(this.xDomain);
  }
  getYScale() {
    this.yDomain = this.getYDomain();
    return d3.scaleLinear()
      .range([this.dims.height, 0])
      .domain(this.yDomain);
  }

  getXDomain() {
    return this.results.map(d => d.name);
  }
  getYDomain() {
    let values = this.results.map(d => d.value);
    let min = Math.min(0, ...values);
    let max = Math.max(...values);
    return [min, max];
  }
  setColors() {
    this.colors = new ColorHelper(this.colorScheme, 'ordinal', this.xDomain);
  }
}


