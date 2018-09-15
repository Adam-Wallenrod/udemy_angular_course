import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'


@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {

  jsonData;
  users;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
    });
    //console.log('this.users: ',this.users);
  }

}
