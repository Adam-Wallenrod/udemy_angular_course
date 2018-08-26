import { HttpClient } from "@angular/common/http"
import { HttpClientTestingModule,
        HttpTestingController } from "@angular/common/http/testing";
import { async, TestBed } from '@angular/core/testing';
import { TranslateLoader, TranslateModule, TranslateService } from "@ngx-translate/core";
import { MultilangComponent } from './multilang.component';
import { createTranslateLoader } from "../app.module";

const TRANSLATIONS_EN = require('../../assets/localization/en-lang.json');
const TRANSLATIONS_FR = require('../../assets/localization/fr-lang.json');

describe('MulitilangComponent', () => {
  let translate: TranslateService;
  let http: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MultilangComponent
      ],
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
          }
        })
      ],
      providers: [ TranslateService ]
    }).compileComponents();
    translate = TestBed.get(TranslateService);
    http = TestBed.get(HttpTestingController);
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(MultilangComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should load translations', async(() => {
    spyOn(translate, 'getBrowserLang').and.returnValue('en');
    const fixture = TestBed.createComponent(MultilangComponent);
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('h2').textContent).toEqual('');
    let h2 = compiled.querySelector('h2').textContent;
    console.log(h2);

    console.log(TRANSLATIONS_EN);

//    http.expectOne('/assets/localization/en-lang.json').flush(TRANSLATIONS_EN);

http.expectOne('en').flush(TRANSLATIONS_EN);

  }));


});

























// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//
// import { MulitilangComponent } from './mulitilang.component';
//
// describe('MulitilangComponent', () => {
//   let component: MulitilangComponent;
//   let fixture: ComponentFixture<MulitilangComponent>;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ MulitilangComponent ]
//     })
//     .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(MulitilangComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
