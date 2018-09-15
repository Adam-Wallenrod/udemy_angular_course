import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-rest-user',
  templateUrl: './rest-user.component.html',
  styleUrls: ['./rest-user.component.css']
})
export class RestUserComponent implements OnInit {

  user;

  constructor(private route: ActivatedRoute,
              private usersService: UsersService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usersService.getUser(id).subscribe(data => {
      this.user = data;
    });
    console.log('user to be displayed: ', id);
  }

}
