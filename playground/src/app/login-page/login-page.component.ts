import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  testLogin = new Login('testUser', 'testPassword');
  newLogin = new Login('','');
  loginForm;
  loading: boolean = true;

  myUrl: string = 'https://www.onet.pl'
  safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.myUrl);
    console.log('created test login: ', this.testLogin);
  }

  submitted = false;

  onSubmit(){
    this.submitted = true;
    console.log('Entered login:', this.newLogin.username);
  };


   yourLoadFunction() {
     console.log('loadFunction is working!');
     this.loading = false;
   }

}
