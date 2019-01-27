import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IBrowser} from "../memory-c/memory-c.component";

/**
 https://stackoverflow.com/questions/34948961/angular-2-custom-form-input
 */

@Component({
  selector: 'tags',
  template: ` <div>
                <span>
                  <form autocomplete="off">
                  <p class="control has-icons-right" style="display:inline-block;font-size: 14px; width:300px">
                    
                    <input [(ngModel)]="browserToAdd"
                            style="font-size: 14px; width:300px" 
                            class="input is-primary"
                            (keyup)=" checkText(inputRef.value)"
                            (click)="toggleList()"
                            name="myBrowser"
                            ngModel 
                            required
                            #inputRef="ngModel"
                    />
                    <span class="icon is-right">                 
                        <i class="fa fa-arrow-down"
                           style="cursor: pointer; z-index: 1000"
                        >
                        </i>
                    </span>
                  </p>
                    <button class="button is-success"
                        (click)="addBrowser(browserToAdd)"
                         [disabled]="disableCreateBtn"    
                    >
                        Create
                    </button>
                    </form>
                </span>
            </div>

  <div *ngIf="showList" class="listWrapper" style="font-size:14px; width: 300px; background-color: white;">
     <span *ngFor="let browser of browsers" 
           class="label label-default" (click)="selectBrowser(browser)">
    {{browser.name}} with id: <b>{{browser.id}}</b>
    <span class="glyphicon glyphicon-remove"
          style="color:red"
          (click)="removeBrowser(browser)">
    X
    </span>
   </span>
    
  </div>
 
  
  `,

})
export class TagsComponent implements OnInit {

  @Output() browsersChange = new EventEmitter<any>();

  tags = ['Chrome','Firefox','Internet Explorer', 'Opera','Safari'];

  browserToAdd: string;

  browsers: IBrowser[] = [
    { id: 1, name: 'Chrome' },
    { id: 2, name: 'Firefox' },
    { id: 3, name: 'Internet Explorer' },
    { id: 4, name: 'Opera' },
    { id: 5, name: 'Safari' }];

  disableCreateBtn: boolean = true;
  showList: boolean = false;


  constructor() {

  }

  ngOnInit() {
  }

  setValue(value) {
    this.tags = value;
  }

  removeBrowser(browserToRemove: IBrowser){
    console.log('browser to remove: ', browserToRemove);

    let index = this.browsers.findIndex( (element) => {
      return element.id === browserToRemove.id;
    } );

    console.log('index: ', index);

     if(index != undefined) {
     this.browsers.splice(index, 1);
     this.browsersChange.emit(this.browsers);
    }
  }


  addBrowser(newBrowserName:string) {
    let result = prompt("Enter id value: ");
    let newId = parseInt(result);
    console.log('prompt result: ', newId);

    let newElement: IBrowser = { name: newBrowserName, id: newId};
    this.browsers.push(newElement);
    this.browsersChange.emit(this.browsers);
    //this.tagToAdd = '';
  }



  selectBrowser(browser: IBrowser){
    console.log('selected browser: ', browser);
  }

  checkText(text) {
    console.log('text: ', text);
    this.disableCreateBtn = false;

    if (text === '') {
      this.disableCreateBtn = true;
    }
    else {
      for (let browser of this.browsers) {
        if (text === browser.name) {
          // let test = this.browsers.filter((element) => {
          //   return element.name === text;
          // });
          // console.log('test: ', test);
          this.disableCreateBtn = true;
          break;
        }
      }
    }

  }


  toggleList(){
    this.showList = !this.showList;
    console.log('showList: ', this.showList);
  }

}
