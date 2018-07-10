import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Input('fromParent') secretInformation: number;
  @Output() childValue = new EventEmitter<number>();

  myFlatJson: {} = {};

  nestedJSON = [
    {
      id: 1,
      name: 'Place_1',
      stations: [
        {
          id: 11,
          name: 'Station_1'
        },
        {
          id: 12,
          name: 'Station_2'
        }
      ]
    },
    {
      id: 2,
      name: 'Place_2',
      stations: [
        {
          id: 21,
          name: 'Station_21'
        },
        {
          id: 22,
          name: 'Station_22'
        }
      ]
    }
  ];




  // makeFlatJSON(data: any){
  //   let result = {};
  //   let resultArray : any[] = [];
  //
  //   function recurse (cur, prop) {
  //       if (Object(cur) !== cur) {
  //          console.log('Cur: ' + cur);
  //           result[prop] = cur;
  //           resultArray.push(cur);
  //         }
  //
  //       } else if (Array.isArray(cur)) {
  //            for(let i=0; i<cur.length; i++)
  //                recurse(cur[i], prop + "[" + i + "]");
  //           if (cur.length == 0)
  //               result[prop] = [];
  //       } else {
  //           var isEmpty = true;
  //           for (let p in cur) {
  //               isEmpty = false;
  //               recurse(cur[p], prop ? prop+"."+p : p);
  //           }
  //           if (isEmpty && prop)
  //               result[prop] = {};
  //       }
  //   }
  //   recurse(data, "");
  //   console.log(resultArray);
  //   return result;
  // }

  constructor() {
    // console.log('NestedJSON: ');
    // console.log(this.nestedJSON);
    // this.myFlatJson = this.makeFlatJSON(this.nestedJSON[1]);
    // console.log('converted: ');
    // console.log(this.myFlatJson);

    let input = this.nestedJSON[0].stations;

    let result = _.mapValues(_.keyBy(input, 'id'), 'name');
    console.log(result);
   }

  ngOnInit() {
      this.childValue.emit(6);
  }

}
