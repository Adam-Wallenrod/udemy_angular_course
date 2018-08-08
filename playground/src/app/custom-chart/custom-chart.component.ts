import {Component, Input, OnChanges} from '@angular/core';
import {
  BaseChartComponent,
  ColorHelper,
  LineComponent,
  LineSeriesComponent
} from '@swimlane/ngx-charts';
import * as d3 from 'd3';
import {area, line, curveLinear} from 'd3-shape';
import {scaleBand, scaleLinear, scalePoint, scaleTime} from 'd3-scale';

@Component({
  selector: 'app-custom-chart',
  template: `
    <ngx-charts-chart
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
             [labelText]="'Y values'">
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
      <svg:g *ngFor="let series of lineChart; trackBy:trackBy">
        <svg:g ngx-charts-line-series
               [xScale]="xScaleLine"
               [yScale]="yScaleLine"
               [colors]="colorsLine"
               [data]="series"
               [scaleType]="'linear'"
               [curve]="curve"/>
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


  // key inputs
  @Input() view;
  @Input() results;
  @Input() lineChart: any;
  @Input() curve: any = curveLinear;
  @Input() ready = false;


  // line chart prop
  xScaleLine;
  yScaleLine;
  xDomainLine;
  yDomainLine;
  seriesDomain;
  colorsLine: ColorHelper;
  scaleType = 'linear';
  transform: string; /// ???
  bandwidth; /// ???


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

    // line chart
    this.xDomainLine = this.getXDomainLine();
    this.yDomainLine = this.getYDomainLine();

    //this.seriesDomain = this.getSeriesDomain();

    this.xScaleLine = this.getXScaleLine(this.xDomainLine, this.dims.width);
    this.yScaleLine = this.getYScaleLine(this.yDomainLine, this.dims.height);
  }

  trackBy(index, item): string {
    return item.name;
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


  // line chart
  getScaleType(values): string {
    let date = true;
    let num = true;

    for (const value of values) {
      // if (!this.isDate(value)) {
      //   date = false;
      // }

      if (typeof value !== 'number') {
        num = false;
      }
    }

    if (date) {
      return 'time';
    }
    if (num) return 'linear';
    return 'ordinal';
  }

  getXDomainLine(): any[] {
    let values = [];

    for (const results of this.lineChart) {
      for (const d of results.series) {
        if (!values.includes(d.name)) {
          values.push(d.name);
        }
      }
    }

    this.scaleType = this.getScaleType(values);
    let domain = [];

    if (this.scaleType === 'time') {
      const min = Math.min(...values);
      const max = Math.max(...values);
      domain = [min, max];
    } else if (this.scaleType === 'linear') {
      values = values.map(v => Number(v));
      const min = Math.min(...values);
      const max = Math.max(...values);
      domain = [min, max];
    } else {
      domain = values;
    }
    // this.xSet = values;
    return domain;
  }


  getYDomainLine(): any[] {
    const domain = [];

    for (const results of this.lineChart) {
      for (const d of results.series) {
        if (domain.indexOf(d.value) < 0) {
          domain.push(d.value);
        }
        if (d.min !== undefined) {
          if (domain.indexOf(d.min) < 0) {
            domain.push(d.min);
          }
        }
        if (d.max !== undefined) {
          if (domain.indexOf(d.max) < 0) {
            domain.push(d.max);
          }
        }
      }
    }

    let min = Math.min(...domain);
    const max = Math.max(...domain);
    // if (this.yRightAxisScaleFactor) {
    //   const minMax = this.yRightAxisScaleFactor(min, max);
    //   return [Math.min(0, minMax.min), minMax.max];
    // } else {
    min = Math.min(0, min);
    return [min, max];
    // }
  }

  getXScaleLine(domain, width): any {
    let scale;
    if (this.bandwidth === undefined) {
      // this.bandwidth = (this.dims.width - this.barPadding);
      this.bandwidth = this.dims.width;
    }

    if (this.scaleType === 'time') {
      scale = scaleTime()
        .range([0, width])
        .domain(domain);
    } else if (this.scaleType === 'linear') {
      scale = scaleLinear()
        .range([0, width])
        .domain(domain);

      //  if (this.roundDomains) {
      //    scale = scale.nice();
      //  }
    } else if (this.scaleType === 'ordinal') {
      scale = scalePoint()
        .range([this.bandwidth / 2, width - this.bandwidth / 2])
        .domain(domain);
    }

    return scale;
  }

  getYScaleLine(domain, height): any {
    const scale = scaleLinear()
      .range([height, 0])
      .domain(domain);

    return scale;
  }
}


