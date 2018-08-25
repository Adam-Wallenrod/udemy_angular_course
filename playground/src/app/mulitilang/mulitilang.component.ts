import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mulitilang',
  //templateUrl: './mulitilang.component.html',
  template: `
      <div>{{ 'HELLO' | translate: param }}</div>
      <div>
        <h2>{{ 'HOME.TITLE' | translate }}</h2>
        <label>
          {{ 'HOME.SELECT' | translate }}
          <select #langSelect (change)="translate.use(langSelect.value)">
              <option *ngFor="let lang of translate?.getLangs()"
                  [value]="lang"
                  [selected]="lang === translate?.currentLang">
              {{ lang }}
              </option>
          </select>
        </label>
      </div>
  `,
  styleUrls: ['./mulitilang.component.css']
})
export class MulitilangComponent implements OnInit {
  param = {value: 'world'};

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
     // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    // translate.use('en');
    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

   }

  ngOnInit() {
    console.info('testing ngx-translate');
  }

}
