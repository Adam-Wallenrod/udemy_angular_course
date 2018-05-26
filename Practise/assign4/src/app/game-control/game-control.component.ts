import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  //ref: number;
  ref;
  counter: number = 0;
  @Output() incCounter = new EventEmitter<number>();

  constructor() {

   }

  ngOnInit() {

  }

  startGame() {
   console.log("Game started");
   this.ref = setInterval(
     () => {
       this.counter++;
      // console.log(this.counter);
       this.incCounter.emit(this.counter );

     }, 3000);
  }

  stopGame(){
    console.log("Game stopped");
    clearInterval(this.ref);
    this.ref = 0;
  }

}
