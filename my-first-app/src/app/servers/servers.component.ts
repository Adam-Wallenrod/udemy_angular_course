import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = "InitialName";
  userName ="";
  emptyString = true;
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;

  }

  onUpdateServerName(event: Event){
    // this.serverName = event.target.value;
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(this.serverName);
  }

  clearUserName(){
    this.userName = "";
  }


  checkIfEmpty(){
   if(this.userName.length){
     this.emptyString = false;
   }
   else {
     this.emptyString = true;
   }
    return this.emptyString;
  }

}
