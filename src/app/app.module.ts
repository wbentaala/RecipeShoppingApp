import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HighlightDirectiveDirective } from './directives/highlight-directive.directive';
import { DropdownDirective } from './directives/dropdown.directive';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeNoDetailComponent } from './recipes/recipe-no-detail/recipe-no-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    RecipesComponent, 
    RecipeListComponent, 
    RecipeDetailComponent, 
    RecipeItemComponent, 
    ShoppingListComponent, 
    ShoppingEditComponent, 
    HighlightDirectiveDirective, 
    DropdownDirective, RecipeNoDetailComponent, RecipeEditComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    RecipeService, 
    ShoppingListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
