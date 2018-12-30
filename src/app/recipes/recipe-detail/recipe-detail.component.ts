import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  rec: Recipe;
  opened: boolean = false;
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.params.subscribe((params)=>{
        this.rec = this.recipeService.getRecipe(params["id"]);
    });
  }

  openDropdown(){
    this.opened = !this.opened;
  }

  addRecipeIngrToSL(){
    this.recipeService.addRecipeIngrToSL(this.rec.ingredients);
  }

}
