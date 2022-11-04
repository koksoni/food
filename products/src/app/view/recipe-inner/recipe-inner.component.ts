import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/shared-services/recipe.service';

@Component({
  selector: 'app-recipe-inner',
  templateUrl: './recipe-inner.component.html',
  styleUrls: ['./recipe-inner.component.css']
})

export class RecipeInnerComponent implements OnInit {

RecipeDescription:any;

  constructor(private recipeService:RecipeService,private acivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
this.acivatedRoute.params.subscribe(params=>{
  let recipeId=params["recipeId"]
  this.recipeService.getRecipesbyId(recipeId).subscribe(response=>{
    this.RecipeDescription=response;
    console.log(this.RecipeDescription)
  })
})
  }

}
