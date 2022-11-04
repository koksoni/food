import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { ProductsInnerComponent } from './view/products-inner/products-inner.component';
import { ProductsComponent } from './view/products/products.component';
import { RecipeInnerComponent } from './view/recipe-inner/recipe-inner.component';
import { RecipeComponent } from './view/recipe/recipe.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:"products/inner/:productId",component:ProductsInnerComponent},
  {path:"recipe",component:RecipeComponent},
  {path:"recipe/inner/:recipeId",component:RecipeInnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
