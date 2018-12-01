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

  fruits = [
    { name: "kiwi", taste: "sweet" },
    { name: "watermelon", taste: "juicy" },
    { name: "avocado", taste: "bitter" },
    { name: "banana", taste: "sweet" }
  ];

  showSweet: boolean = true;
  condition = false;


  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
    });
    //console.log('this.users: ',this.users);
  }

}
