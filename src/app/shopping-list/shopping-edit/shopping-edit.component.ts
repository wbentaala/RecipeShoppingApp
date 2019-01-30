import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  ingredient: Ingredient;
  subscription: Subscription;
  editMode = false;
  id: number;

  fg: FormGroup;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.fg = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [Validators.required, Validators.pattern('[1-9]+[0-9]*')])
    });
    this.subscription = this.shoppingListService.ingredientEdit.subscribe((id) => {
      this.id = id;
      this.ingredient = this.shoppingListService.getIngredientById(id);
      this.editMode = true;
    });
  }

  onSubmit() {
    const ingredient = new Ingredient(this.fg.value.name, +this.fg.value.amount);
    if (!this.editMode) {
      this.shoppingListService.addIngredient(ingredient);
    }
    else{
      this.shoppingListService.updateIngredient(this.id, ingredient);
      this.fg.reset();
      this.editMode = false;
    }
  }

  onClear(){
    this.fg.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingListService.DeleteIngredient(this.id);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
