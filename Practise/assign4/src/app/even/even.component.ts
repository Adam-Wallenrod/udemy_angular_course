import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit, OnChanges {
  @Input() inputNumber: number;
  evens = [];

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(){
    if (!(this.inputNumber % 2)){
      this.evens.push(this.inputNumber);
    }
  }

}
