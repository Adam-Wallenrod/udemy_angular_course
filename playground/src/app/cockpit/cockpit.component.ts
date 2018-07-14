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
      "id": 1,
      "name": "Place_1",
      "stations": [
        {
          "id": 11,
          "name": "Station_1"
        },
        {
          "id": 12,
          "name": "Station_2"
        }
      ]
    },
    {
      "id": 2,
      "name": "Place_2",
      "stations": [
        {
          "id": 21,
          "name": "Station_21"
        },
        {
          "id": 22,
          "name": "Station_22"
        }
      ]
    }
  ];





  makeFlatJson(data) {
      let result = {};
      let arrayResult: Array<Object> = [];

      let obj: {[k: string]: any} = {};


      for(let i=0; i< data.length; i++){
        arrayResult[i] = [{obj}];
      }


      function recurse (cur, prop, counter?: number) {

          if (Object(cur) !== cur) {
             result[prop] = cur;
             //arrayResult[counter].push({[prop]:cur});
              arrayResult[counter] = {[prop]:cur};
              //arrayResult[0].pupcia = 'yeah'
                //console.log(arrayResult[0]);
          }
           else if (Array.isArray(cur)) {

               for(let i=0; i<cur.length; i++)
               {

                 recurse(cur[i], prop + "[" + i + "]", i);

               }

                  result[prop] = [];
          }
           else
            {
              var isEmpty = true;
              for (let p in cur) {
                  isEmpty = false;
                 // console.log(cur[p]);
                 //
                 //  console.log(prop);
                   recurse(cur[p], prop ? prop+"_"+p : p);
                  //recurse(cur[p], prop+"_"+p, counter );



              }

          }
      }

      //recurse(data, "", data.length);
      recurse(data, "", data.lengh);
      //console.log(result);
      //console.log((result));
      console.log(arrayResult);
    //  console.log(testArray);
      //return result;
      return arrayResult;
  }


  constructor() {

  this.makeFlatJson(this.nestedJSON);

  }

  ngOnInit() {
      this.childValue.emit(6);
  }

}
