import { 
  Component, 
  OnInit, 
  ViewChild, 
  ElementRef, 
  Input
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput')
  nameInputRef: ElementRef;
  @ViewChild('amountInput')
  amountInputRef: ElementRef;
  @Input() ingredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const ingredient = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(ingredient);
  }

}
