import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup, ValidatorFn,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  projectStatusList: string[ ] = ['Stable', 'Critical', 'Finished'];
  defaultProjectStatus: string = 'Stable';
  forbiddenName: string [] = ['Test'];

  projectForm = new FormGroup({
    projectName: new FormControl('', [Validators.required, this.forbiddenNameValidator(this.forbiddenName)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    projectStatus: new FormControl(null)
  });

  constructor() {
    this.projectForm.controls['projectStatus']
      .setValue(this.defaultProjectStatus, {onlySelf: true});
  }

  onSubmit() {
    console.warn(this.projectForm);
  }


  // forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  //   return (control: AbstractControl): { [key: string]: any } | null => {
  //     const forbidden = nameRe.test(control.value);
  //     return forbidden ? {'forbiddenName': {value: control.value}} : null;
  //   };
  //
  // }

  forbiddenNameValidator(name: string[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (name.indexOf(control.value) !== -1) {
        return {'forbiddenName': {value: control.value}};
      }
      else {
        return null;
      }

    };

  }

}
