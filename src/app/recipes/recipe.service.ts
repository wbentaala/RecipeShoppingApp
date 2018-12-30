import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe(
        1, 
        'Delicious Hamburger', 
        'this is a short description of recipe1', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLu1v2DfYYpuYHk3qSMi7rbAt9l9rJ1LAOCDl99pJ5n390tHeV',
        [
            new Ingredient('Tomatoes', 2),
            new Ingredient('Eggs', 3)
        ]),
        new Recipe(
        2,
        'The Best Lasagna', 
        'this is a short description of recipe2', 
        'https://www.jessicagavin.com/wp-content/uploads/2014/02/meat-lasagna-recipe-1200.jpg',
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

    public getRecipe(id: number): Recipe{
        return this.recipes.find(r=>r.id==id);
    }

    public addRecipeIngrToSL(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}