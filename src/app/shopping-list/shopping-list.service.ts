import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    private ingredients: Ingredient[] = [
        new Ingredient('Eggs', 2),
        new Ingredient('Tomatoes', 4)
    ];

    IngredientChanged = new EventEmitter<Ingredient[]>(); 
    
    public getIngredients(): Ingredient[]{
        return this.ingredients.slice();
    }

    public addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.IngredientChanged.emit(this.ingredients);
      }

    public addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.IngredientChanged.emit(this.ingredients);
    }
}