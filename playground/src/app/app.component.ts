import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

information: number = 87;
serverCreated = false;
forParent : number;

onClickButton(){
  this.serverCreated = true;
}

onChildUpdate(receivedData){
  //console.log('This is parent~! receivedData is: ');
  //console.log(receivedData);
  this.forParent = receivedData;
}


}
