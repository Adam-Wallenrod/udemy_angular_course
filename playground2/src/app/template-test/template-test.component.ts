import {Component, OnInit, AfterViewChecked} from '@angular/core';
import {TemplateRef, ElementRef} from '@angular/core';
import {ViewChild, ViewContainerRef} from '@angular/core';
import {SwapiService} from '../services/swapi.service';

@Component({
  selector: 'app-template-test',
  templateUrl: './template-test.component.html',
  styleUrls: ['./template-test.component.scss']
})
export class TemplateTestComponent implements OnInit {

  @ViewChild('mySecondTemplate') mySecondTemplateRef: TemplateRef<any>;
  @ViewChild('container') containerRef: ViewContainerRef;

  constructor(private swapiService: SwapiService) {
  }

  ngOnInit() {
    console.log('mySecondTemplateRef: ', this.mySecondTemplateRef);
    // this.containerRef.createEmbeddedView(this.mySecondTemplateRef, {variableValue: 'this variable'});
    // this.swapiService.getUser({id: '1'}).then((data) =>{
    //   console.log('data:', data);
    // });

  }


}
