import { Component, OnInit } from '@angular/core';
import { Login } from '../login';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  testLogin = new Login('testUser', 'testPassword');
  newLogin = new Login('','');
  loginForm;

  constructor() { }

  ngOnInit() {

    console.log('created test login: ', this.testLogin);
  }

  submitted = false;

  onSubmit(){
    this.submitted = true;
    console.log('Entered login:', this.newLogin.username);
  };

}
