import { Component, OnInit } from '@angular/core';
//import { HackerNewsService } from '../hacker-news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {

  // constructor( private hackerNewsService: HackerNewsService) { }
  constructor() { }

  ngOnInit() {
    // this.hackerNewsService.getLatestStories()
    //     .subscribe( data => { console.log(data)} );
  }

}
