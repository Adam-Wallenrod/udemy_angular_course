import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';

import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
     'Schabowy',
     'Traditional Polish meal. Every Janusz enjoys it!',
    // 'https://www.maxpixel.net/static/photo/2x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',
       'https://www.maxpixel.net/static/photo/2x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',
     [
       new Ingredient('Schabowy with a bone', 1),
       new Ingredient('Potatoes', 8)
     ]),

    new Recipe(
     'BurgerBurger',
     'It is very good but makes you fat',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS19kQNJ1g6o5PJWQLqhDal3L-NdsdViEryOr6SjbAh39Hbd1xbFw',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Belgian Fries', 12)
      ])
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();  //returns  a new array which is an exact copy of recipes
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients) ;
  }

}
