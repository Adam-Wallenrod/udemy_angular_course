import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DogComponent} from './dog.component';
import {HTTP_INTERCEPTORS, HttpInterceptor, HttpEvent, HttpResponse} from '@angular/common/http';
import {Injectable, Injector} from '@angular/core';
import {HttpRequest} from '@angular/common/http/src/request';
import {HttpHandler} from '@angular/common/http/src/backend';
import {Observable, of} from 'rxjs';
import {mockDog} from '../services/dog.service.spec';
import {HttpClientTestingModule} from '@angular/common/http/testing';


@Injectable()
export class HttpRequestInterceptorMock implements HttpInterceptor {

  constructor(private injector: Injector) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url && request.url.indexOf('https://dog.ceo/api/breeds/image/random') > -1) {

      return of(new HttpResponse({status: 200, body: mockDog}));
    }

    return next.handle(request);

  }
}


describe('DogComponent', () => {
  let component: DogComponent;
  let fixture: ComponentFixture<DogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [DogComponent],

      imports: [HttpClientTestingModule],

      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpRequestInterceptorMock,
          multi: true
        }

      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render image', async () => {
    const img: HTMLImageElement = fixture.debugElement.nativeElement.querySelector('img');
    console.log('img: ', img);

    expect(img).not.toBe(null);
    expect(mockDog.message === img.src).toBe(true);

  });


});
