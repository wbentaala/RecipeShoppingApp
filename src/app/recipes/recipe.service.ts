import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('recipe1', 
        'this is a short description of recipe1', 
        'https://jimmiehalemission.com/wp-content/uploads/recipe-575434_640-1.png',
        [
            new Ingredient('Tomatoes', 2),
            new Ingredient('Eggs', 3)
        ]),
        new Recipe('recipe2', 
        'this is a short description of recipe2', 
        'https://jimmiehalemission.com/wp-content/uploads/recipe-575434_640-1.png',
        [
            new Ingredient('Apples', 1),
            new Ingredient('Ice', 2)
        ])
    ];
    selectedRecipe = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService){}

    public getRecipes(){
        return this.recipes;
    }

    public addRecipeIngrToSL(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}