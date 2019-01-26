import { Component, OnInit, ViewChild } from '@angular/core';

interface IBrowser {
  id: number;
  name: string;
}


@Component({
  selector: 'app-memory-c',
  templateUrl: './memory-c.component.html',
  styleUrls: ['./memory-c.component.css']
})
export class MemoryCComponent implements OnInit {
  @ViewChild('inputRef') inputRef: any;

  availableBrowsers: IBrowser[] = [
    { id: 1, name: 'Chrome' },
    { id: 2, name: 'Firefox' },
    { id: 3, name: 'Internet Explorer' },
    { id: 4, name: 'Opera' },
    { id: 5, name: 'Safari' }];

  disableCreateBtn: boolean = true;
  selectedBrowser: IBrowser = { name: 'none', id: 1000 };

  constructor() { }

  ngOnInit() {
  }

  onSubmitClick(form: any) {
    console.log('Form: ', form.value);

  }

  onCreateClick() {
    let result = prompt("Enter id value: ");
    let newId = parseInt(result);
    console.log('prompt result: ', newId);
    this.selectedBrowser = { name: 'aaa', id: newId }
    console.log('this.inputRef: ', this.inputRef);
  }

  checkText(text) {
    console.log('text: ', text);
    this.disableCreateBtn = false;

    if (text === '') {
      this.disableCreateBtn = true;
    }
    else {
      for (let browser of this.availableBrowsers) {
        if (text === browser.name) {
          this.disableCreateBtn = true;
          break;
        }
      }
    }


  }

}
