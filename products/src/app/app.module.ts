import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navbar/header/header.component';
import { ProductsComponent } from './view/products/products.component';
import { RecipeComponent } from './view/recipe/recipe.component';
import { ProductsInnerComponent } from './view/products-inner/products-inner.component';
import { RecipeInnerComponent } from './view/recipe-inner/recipe-inner.component';
import { HomeComponent } from './view/home/home.component';
import { RecipeCardComponent } from './shared-components/recipe-card/recipe-card.component';
import { ProductCardComponent } from './shared-components/product-card/product-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    RecipeComponent,
    ProductsInnerComponent,
    RecipeInnerComponent,
    HomeComponent,
    RecipeCardComponent,
    ProductCardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
