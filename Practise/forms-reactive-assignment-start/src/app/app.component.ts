import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup, ValidatorFn,
  Validators
} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  projectStatusList: string[ ] = ['Stable', 'Critical', 'Finished'];
  defaultProjectStatus: string = 'Stable';
  forbiddenName: string [] = ['Test', 'test'];

  projectForm = new FormGroup({
    projectName: new FormControl('', [Validators.required], this.asyncForbiddenNameValidator),
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

  // forbiddenNameValidator(name: string[]): ValidatorFn {
  //   return (control: AbstractControl): { [key: string]: any } | null => {
  //     if (name.indexOf(control.value) !== -1) {
  //       return {'forbiddenName': {value: control.value}};
  //     }
  //     else {
  //       return null;
  //     }
  //   };
  // }


  asyncForbiddenNameValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {

      setTimeout(() => {
        if (control.value === 'Test' ) {
          resolve({'forbiddenName': {value: control.value}});
        } else {
          return (null);
        }

      } ,1500 );

    });
    return promise;
  }


}
