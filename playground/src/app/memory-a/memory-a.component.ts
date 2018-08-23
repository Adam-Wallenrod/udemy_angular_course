import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-memory-a',
  templateUrl: './memory-a.component.html',
  styleUrls: ['./memory-a.component.css']
})
export class MemoryAComponent implements OnInit {

  myArray = [1, 2, 4, 6, 30];

  constructor() { }

  ngOnInit() {
  }

}
