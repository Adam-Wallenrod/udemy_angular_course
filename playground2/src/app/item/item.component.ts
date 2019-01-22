import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @ViewChild('tooltip') tooltip: ElementRef;
  @ViewChild('main') main: ElementRef;

  constructor() { }

  list = {};

  ngOnInit() {

    // this.list = [
    //   {
    //     name:"Terry",
    //     age:23
    //   },
    //   {
    //     name:"Bob",
    //     age:25
    //   },
    //   {
    //     name:"Larry",
    //     age:27
    //   }
    // ];

    //this.list = [{name:"AAa"}, {name: "BBB"}, {name: "Aaa"}];
    this.list = [{name: "AAA"}, {name: "BBB"},{name:"aaa"}];

  }

  @HostListener('mouseleave')
  onMouseOut(){
    this.hideTooltip();
  }


  showTooltip(){
    console.log('showTooltip() is working!');
    this.tooltip.nativeElement.classList.remove('not-visible');
  }


  hideTooltip() {

    this.tooltip.nativeElement.classList.add('not-visible');
  }

}
