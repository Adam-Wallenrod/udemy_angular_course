import { Component, OnInit } from '@angular/core';
import {MulticheckboxListSelectionChangeEv, OptionType} from '../checkboxlist/checkboxlist.component';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-checkboxlist-form',
  templateUrl: './checkboxlist-form.component.html',
  styleUrls: ['./checkboxlist-form.component.scss']
})
export class CheckboxlistFormComponent implements OnInit {

  form = new FormGroup({
    selectedItems: new FormControl('')
  });

  records: OptionType[] = [];
  checked = false;

  checkboxListOptions: OptionType[] = [
    {value: 1, label: "option_1"},
    {value: 2, label: "option_2"},
    {value: 3, label: "option_3"}
  ];


  constructor() { }

  ngOnInit() {
  }



  onCheckListChange(data: MulticheckboxListSelectionChangeEv) {

    const id = data.option.value;

    if ( data.checkboxEvent.checked === true ) {
      setTimeout(
        () => {
          this.records.push(data.option);
        }, 1500
      );


    } else {

      this.records = this.records.filter(x => x.value !== id);
    }

  }

}
