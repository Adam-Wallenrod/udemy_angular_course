import { Component, OnInit } from '@angular/core';
import {IitemTable} from './IitemTable';


@Component({
  selector: 'app-memory-a',
  templateUrl: './memory-a.component.html',
  styleUrls: ['./memory-a.component.css']
})
export class MemoryAComponent implements OnInit {

 children: IitemTable[] = [];


  myArray = [1, 2, 4, 6, 30];
  parents: IitemTable[] = [ {id:1, name: 'name1',collapsed: true, wasClicked: false, level: 0 ,parent: {collapsed: false} },
                          {id:2, name: 'name2',collapsed: true, wasClicked: false, level: 0 ,parent: {collapsed: false} },
                          {id:3, name: 'name3',collapsed: true, wasClicked: false, level: 0 ,parent: {collapsed: false} }
            ];

  constructor() {

   }

  ngOnInit() {
    //assigning by value
    // let batman = 1900;
    // let superman;
    // superman = batman;
    //
    // superman++;
    // console.log("%c batman: ", "color: orange" , batman);
    // console.log("%c superman: ", "color: orange" , superman);

    //assigning by reference
    // let flash = [8,8,8];
    // let ironFist = flash;
    //
    // ironFist.push(0);
    //
    // console.log("%c flash: ", "color: blue" , flash);
    // console.log("%c superman: ", "color: blue" , ironFist);

    // this.parents.forEach((parent) => {
    //   this.addParent(parent);
    // });

    // this.addParent(this.parents[0]);
    // console.log('this.parents[0].collapsed: ', this.parents[0].collapsed);
    // console.log('this.children[0][0].parent.collapsed: ': this.children[0][0].parent.collapsed );
    //  this.parents[0].collapsed = false;
    //  console.log('this.parents[0].collapsed: ', this.parents[0].collapsed);
    //  console.log('this.children[0][0].parent.collapsed: ', this.children[0][0].parent.collapsed );

  }

  addParent(parent: any) {
    for(let i = 0; i < 3; i++) {
      let childId = parent.id*10 + (i+1);
      let childName = 'name' + childId;
      let child: IitemTable[] = [{id: childId, name: 'name'+childId, collapsed: true, wasClicked: false, parent: parent }];
      this.children.concat(child);
  }
  console.log(this.children);
  }

  onClick(item){
    console.log('item: ', item, ' was clicked!');

    if(item.wasClicked===false){
      this.addParent(item);
      this.parents.concat(this.children);
    }
    item.collapsed = !item.collapsed;
    item.wasClicked = true;
  }
}
