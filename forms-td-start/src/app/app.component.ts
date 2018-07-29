import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion= 'pet' ;
  answer = '';
  genders = ['male', 'female'];
  submitted = false;

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };



  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {username: suggestedName, email:''},
    //   secret: 'pet',
    //   questionAswer: '',
    //   gender: 'male'
    // });

    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log('Submitted!');
  //   console.log(form);
  // }

  onSubmit(){
      this.submitted = true;
      // console.log('Submitted (alternative method)!');
      this.user.username = this.signupForm.value.userData.username;
      this.user.email = this.signupForm.value.userData.email;
      this.user.secretQuestion = this.signupForm.value.secret;
      this.user.answer = this.signupForm.value.questionAnswer;
      this.user.gender = this.signupForm.value.gender;
      console.log(this.signupForm);
      this.signupForm.reset();
  }
}