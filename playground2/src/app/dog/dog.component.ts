import { Component, OnInit } from '@angular/core';
import {DogService, IDog} from '../services/dog.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})

export class DogComponent implements OnInit {

  dog$: Observable<IDog>;

  constructor(public dogService: DogService) { }

  ngOnInit() {

    this.dog$ = this.dogService.randomDog();
    console.log('dog$: ', this.dog$);

  }

}
