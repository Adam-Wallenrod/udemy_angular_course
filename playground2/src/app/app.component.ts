import { Component } from '@angular/core';
import {OptionType} from './checkboxlist/checkboxlist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'playground2';



  checkboxListOptions: OptionType[] = [
    {value: 1, label: "option_1"},
    {value: 2, label: "option_2"},
    {value: 3, label: "option_3"}
  ];
}
