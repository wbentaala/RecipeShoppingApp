import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeId: number;
  recipe: Recipe;
  editMode: boolean = false;
  
  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.recipeId = params['id'];
      this.editMode = this.recipeId!=null;
      this.recipe = this.recipeService.getRecipe(this.recipeId);
    });
    
  }

 
}
