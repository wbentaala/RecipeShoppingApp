import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input()
  rec: Recipe;
  opened: boolean = false;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  openDropdown(){
    this.opened = !this.opened;
  }

  addRecipeIngrToSL(){
    this.recipeService.addRecipeIngrToSL(this.rec.ingredients);
  }

}
