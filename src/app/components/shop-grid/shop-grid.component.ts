import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interface/Product.interface';


import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop-grid',
  templateUrl: './shop-grid.component.html',
  styleUrls: ['./shop-grid.component.css']
})
export class ShopGridComponent implements OnInit {
  products:Product[]|any=[];
  constructor(private productService: ProductService,private router:Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = Object.values(products)[0];
      console.log("api** =");
      console.log(Object.values(products)[0]);
      console.log("my table** =");
      console.log(this.products);

    });
  }
  goToProductDetailsPage(id:number): void{
    this.router.navigate(['/product-details/'+id]);
  }
}
