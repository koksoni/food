import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

private allProducts:any ="https://europroductcms.azurewebsites.net/api/fetchProducysStepByStep/1/500"
private Idproduct:any="https://europroductcms.azurewebsites.net/api/getProductById"

  constructor( private httpClient:HttpClient) { }

  getAllProducts():Observable<any>{
    return this.httpClient.get(this.allProducts);
    
  }
  getProductsbyId(productId:number){
   let apiUrl:string=`${this.Idproduct}/${productId}`
   return this.httpClient.get(apiUrl)

  }
}
