import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingr: Ingredient;
  ingredients: Ingredient[];
  ingredientsSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientsSubscription = this.shoppingListService.IngredientChanged.subscribe(
      (ing) => this.ingredients = ing
    );
  }

  onEditItem(id: number){
    this.shoppingListService.ingredientEdit.next(id);
  }
  

  ngOnDestroy(){
    this.ingredientsSubscription.unsubscribe();
  }

}
