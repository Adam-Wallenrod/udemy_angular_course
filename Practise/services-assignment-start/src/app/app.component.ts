import { Component, DoCheck, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { CounterService } from './counter.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(private usersService: UsersService,
              private counterService: CounterService
             ){}

  counterActive: number;
  counterInactive: number;


  ngOnInit(){
    this.counterActive = 0;
    this.counterInactive = 0;
  }


  ngDoCheck(){
    this.counterActive = this.counterService.counterActive;
    this.counterInactive = this.counterService.counterInactive;
  }

}
