import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .fiveth {
        color: pink;
      }
    `]
})
export class AppComponent {
  toggle = false;
  counter: number = 0;
  timestamp: Date;
  numberOfClicks = [];
  arrayContainer = [];
  fivethOrBigger = false;


showHideSecret() {
  if(this.toggle){
    this.toggle = false;
  }
  else {
    this.toggle = true;
  }
  this.counter++;
  this.timestamp = new Date();
  // this.arrayContainer = [this.counter, this.timestamp];
  // this.arrayContainer = [this.counter];
  this.arrayContainer = [this.timestamp];
  this.numberOfClicks.push(this.arrayContainer);
}

getColor(value){

    return value >= 4 ? 'blue' : 'white';
}

}
