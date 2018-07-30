import { Component, HostBinding } from '@angular/core';
import {fadeAnimation} from './fade.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ fadeAnimation ]

})
export class AppComponent {
  title = 'app';

  information: number = 87;
  serverCreated = false;
  forParent : number;

  onClickButton() {
    this.serverCreated = true;
  }

  onChildUpdate(receivedData) {
    // console.log('This is parent~! receivedData is: ');
    // console.log(receivedData);
    this.forParent = receivedData;
  }

  // public getRouterOutletState(outlet) {
  //   return outlet.isActivated ? outlet.activatedRoute : '';
  // }

}


