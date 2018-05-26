import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, OnChanges {
  @Input() inputNumber: number ;
  odds = [];

  constructor() { }


  ngOnInit() {
    //console.log(this.odds);

  }

  ngOnChanges(){
    if (this.inputNumber % 2){
      this.odds.push(this.inputNumber);
      console.log(this.odds);
    }
  }

}
