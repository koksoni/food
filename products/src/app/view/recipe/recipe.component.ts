import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/shared-services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  AllRecipes:any[]=[]
  constructor(private RecipeService:RecipeService) { }

  ngOnInit(): void {
    this.RecipeService.getAllrecipes().subscribe((response:any)=>{
      this.AllRecipes=response
    })
  }

}
