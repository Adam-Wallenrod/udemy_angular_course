import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  arrayOfNumbers: number[] = [1,2,4,4,1];
  alreadyChecked: number[] = [];


  constructor() { }

  ngOnInit() {


    //first solution
    // for (let index = 0; index < this.arrayOfNumbers.length-1; index++ ){
    //
    //   if(this.alreadyChecked.indexOf(this.arrayOfNumbers[index])) {
    //     let counter = index + 1;
    //     let tempArray = this.arrayOfNumbers.slice(counter);
    //     let indexOfPair = tempArray.indexOf( this.arrayOfNumbers[index]);
    //
    //     console.log('checking: 'this.arrayOfNumbers[index]);
    //     console.log('indexOfPair', indexOfPair);
    //
    //     if( indexOfPair !== -1 ){
    //       console.log(this.arrayOfNumbers[index] + ' has pair -->' , tempArray[indexOfPair]);
    //     }
    //     else {
    //       console.log(this.arrayOfNumbers[index] + ' does not have a pair!');
    //       break;
    //     }
    //
    //     this.alreadyChecked.push(this.arrayOfNumbers[index]);
    //     console.log('alreadyChecked: ', this.alreadyChecked);
    //   }
    //
    //   //console.log(tempArray);
    // }


    //second solution - most efective
    let element = this.arrayOfNumbers[0];
    for(let i = 1; i < this.arrayOfNumbers.length; i++)
    {
      element = element ^ this.arrayOfNumbers[i];
      console.log('current element: ', element);
    }
    console.log('element with no pair: ', element);
  }

}
