import {Component, OnInit} from '@angular/core';
import {MulticheckboxListSelectionChangeEv, OptionType} from '../checkboxlist/checkboxlist.component';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, of, Subject} from 'rxjs';
import {concatMap} from 'rxjs/operators';


@Component({
  selector: 'app-checkboxlist-form',
  templateUrl: './checkboxlist-form.component.html',
  styleUrls: ['./checkboxlist-form.component.scss']
})
export class CheckboxlistFormComponent implements OnInit {

  private selectionSubject = new Subject<MulticheckboxListSelectionChangeEv>();

  form = new FormGroup({
    selectedItems: new FormControl('')
  });

  records: OptionType[] = [];
  checked = false;

  checkboxListOptions: OptionType[] = [
    {value: 1, label: 'option_1'},
    {value: 2, label: 'option_2'},
    {value: 3, label: 'option_3'}
  ];


  constructor() {
  }

  ngOnInit() {

    this.selectionSubject
      .pipe(concatMap(data => {

        const id = data.option.value;

        if (data.checkboxEvent.checked) {

          return Observable.create((observer) => {
            const timeout = setTimeout(() => {
              console.log('Returning data!');

              observer.next({
                type: 'ADD',
                data: data.option
              });

              observer.complete();
            }, 1500);

            return () => clearTimeout(timeout);

          });

        } else {

          return of({
            type: 'REMOVE',
            data: id
          });
        }

      }))
      .subscribe((action: any) => {

        console.log('action - ', action.type);
        if(action.type === 'ADD') {
          this.records.push(action.data);
        } else {
          this.records = this.records.filter( x => x.value !== action.data);
        }


      });

  }


  onCheckListChange(data: MulticheckboxListSelectionChangeEv) {
    this.selectionSubject.next(data);
  }

}
