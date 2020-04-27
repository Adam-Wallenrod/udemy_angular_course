import {TestBed} from '@angular/core/testing';
import {DogService, IDog} from './dog.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


export const mockDog: IDog = {
  message: 'https://images.dog.ceo/breeds/pyrenees/n02111500_2617.jpg',
  status: 'success'
};


describe('DogService', () => {

  let httpTestingController: HttpTestingController;
  let service: DogService;


  beforeEach(() => {
    TestBed.configureTestingModule({

      imports: [HttpClientTestingModule],
      providers: [DogService]

    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(DogService);
  });


  afterEach(() => {
    httpTestingController.verify();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('randomDog() should provide dog data', () => {

    service.randomDog().subscribe((dog: IDog) => {
      console.log('dog: ', dog);
      console.log('mockDog: ', mockDog);
      expect(dog).not.toBe(null);
      expect(JSON.stringify(dog)).toEqual(JSON.stringify(mockDog));
    });


    const req = httpTestingController.expectOne(`https://dog.ceo/api/breeds/image/random`);
    req.flush(mockDog);

  });


});
