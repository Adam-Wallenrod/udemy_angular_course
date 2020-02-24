import {Component, OnInit, AfterContentInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {FormControl} from '@angular/forms/src/model';
import {fromEvent} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';


export interface MyFormModel {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
}


export interface NewFormModel {
  name: {
    type: string;
    value: string;
    placeHolder: string;
    label: string
  };
  description: {
    type: string,
    value: string,
    placeHolder: string,
    label: string
  };
  notes: {
    type: string,
    value: string,
    placeHolder: string,
    label: string
  };
}


@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit, AfterContentInit {

  myForm: FormGroup = this.formBuilder.group({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: 0
  });


  newFormModel: NewFormModel = {
    name: {
      type: 'text',
      value: '',
      placeHolder: 'Type policy name',
      label: 'name',

    },
    description: {
      type: 'text',
      value: '',
      placeHolder: 'Type description for policy',
      label: 'description'
    },
    notes: {
      type: 'text',
      value: '',
      placeHolder: 'Write a comment to explain what changes',
      label: 'notes'
    }
  };

  get formValue() {
    return this.myForm.value as MyFormModel;
  }

  searchBox: HTMLElement;
  keyup$;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
//    console.log('init: ', this.myForm);

    const newForm = this.createForm(this.newFormModel);
    console.log('newForm: ', newForm);

    const myGroup = this.createFormGroup(this.newFormModel);
  }




  ngAfterContentInit() {

    this.searchBox = document.getElementById('search-box');
    console.log('searchBox: ', this.searchBox);

    this.keyup$ = fromEvent(this.searchBox, 'keyup');

    this.keyup$.pipe(
      map((i: any) => i.key),
      debounceTime(500)

    ).subscribe((data) => {
      console.log('keyup: ', data );
    });

  }




  onSubmit() {
    const value = this.formValue;
    console.log('myForm value = ', value);
  }

  // private createForm(model: MyFormModel): FormGroup {
  //   return this.fb.group(model);
  // }

  private updateForm(model: Partial<MyFormModel>): void {
    this.myForm.patchValue(model);
  }


  createFormGroup(model: any) {
    const group: FormGroup | any = this.formBuilder.group({});


    for (const keyName of Object.keys(model)) {
      let control: FormControl;


      if (model[keyName].value) {
        control = this.formBuilder.control(this.newFormModel[keyName].value);
      }

      // const singleGroup = this.formBuilder.group({[keyName]: model[keyName]});
      // group.addControl( keyName, singleGroup);
      group[keyName] = control;
    }

    const updatedGroup = this.formBuilder.group(group);
    console.log('updatedGroup: ', updatedGroup );
    return updatedGroup;
  }


  createForm(model): FormGroup {
    const _simpleFormGroup: FormGroup | any = {};

    for (const _control of Object.keys(model)) {
      let control: FormControl;
      if (this.newFormModel[_control].value) {
        if (this.newFormModel[_control].Validators) {
          control = this.formBuilder.control(this.newFormModel[_control].value, {
            validators: this.newFormModel[_control].Validators,
          });
        } else {
          control = this.formBuilder.control(this.newFormModel[_control].value);
        }
      }
      _simpleFormGroup[_control] = control;
    }
    return this.formBuilder.group(_simpleFormGroup);
  }


}
