import { Component,
         ViewChild } from '@angular/core';
         import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted = false;
  defaultSelection= 'advanced';

  @ViewChild('myForm') myForm: NgForm;


  onSubmit(){
    this.submitted = true;
    console.log('Submitted:', this.submitted);
    console.log(this.myForm);
  }

}
