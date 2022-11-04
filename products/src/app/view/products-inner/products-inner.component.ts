import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared-services/products.service';

@Component({
  selector: 'app-products-inner',
  templateUrl: './products-inner.component.html',
  styleUrls: ['./products-inner.component.css']
})
export class ProductsInnerComponent implements OnInit {
currentProduct:any;

  constructor(private productService:ProductsService,private acivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.acivatedRoute.params.subscribe((params:any)=>{
      let productId=params["productId"]
      this.productService.getProductsbyId(productId).subscribe(response=>{
        this.currentProduct=response;
        console.log(this.currentProduct)
      }) 
    })
  }
}
