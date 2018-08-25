import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mean-pipe-host',
  template: '<div>{{ values | mean}}</div>',
  styleUrls: ['./mean-pipe-host.component.css']
})
export class MeanPipeHostComponent implements OnInit {
  values: number[] = [1,2,3];
  constructor() { }

  ngOnInit() {
  }

}
