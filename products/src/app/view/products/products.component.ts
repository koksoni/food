import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared-services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  AllProducts:[]=[]

  constructor(private productsService:ProductsService ) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((response:any)=>{
      this.AllProducts=response
    })
  }

}
