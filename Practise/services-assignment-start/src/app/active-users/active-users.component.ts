import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../users.service';
import { CounterService } from '../counter.service';


@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {

  constructor(private usersService: UsersService,
              private counterService: CounterService
             ){}

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
    this.counterService.incrementInactiveCounter();
  }


    users = this.usersService.activeUsers;

}
