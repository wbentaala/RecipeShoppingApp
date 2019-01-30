import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
import { TouchSequence } from 'selenium-webdriver';

export class ShoppingListService{
    private ingredients: Ingredient[] = [
        new Ingredient('Eggs', 2),
        new Ingredient('Tomatoes', 4)
    ];

    IngredientChanged = new Subject<Ingredient[]>(); 
    ingredientEdit = new Subject<number>();
    
    public getIngredients(): Ingredient[]{
        return this.ingredients.slice();
    }

    public addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.IngredientChanged.next(this.ingredients);
      }

    public addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.IngredientChanged.next(this.ingredients);
    }

    public getIngredientById(id: number): Ingredient{
        return this.ingredients[id];
    }

    public updateIngredient(id: number, ingredient: Ingredient){
        this.ingredients[id] = ingredient;
    }

    public DeleteIngredient(id: number){
        this.ingredients.splice(id,1);
    }
}