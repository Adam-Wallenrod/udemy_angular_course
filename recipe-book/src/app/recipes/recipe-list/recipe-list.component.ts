import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply test', 'https://www.maxpixel.net/static/photo/2x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'),
    new Recipe('A test recipe2', 'This is simply test2', 'https://www.maxpixel.net/static/photo/2x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
