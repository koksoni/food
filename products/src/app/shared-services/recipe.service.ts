import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';



@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  private allRecipes:any="https://europroductcms.azurewebsites.net/api/fetchRecipesStepByStep/1/1000"
  private IdRecipes:any="https://europroductcms.azurewebsites.net/api/getRecipeById"

  constructor(private httpClient:HttpClient) { }
  getAllrecipes():Observable<any>{
    return this.httpClient.get(this.allRecipes);
    
  }
  getRecipesbyId(recipeId:number){
    let apiUrl:string=`${this.IdRecipes}/${recipeId}`
    return this.httpClient.get(apiUrl)
  }
}

