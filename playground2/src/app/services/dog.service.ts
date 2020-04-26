import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


export interface IDog {
  message: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private httpClient: HttpClient) {

  }


  randomDog(): Observable<IDog> {

    return this.httpClient.get<IDog>(`https://dog.ceo/api/breeds/image/random`);
  }

}
