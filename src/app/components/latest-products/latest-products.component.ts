import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/Product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.css']
})
export class LatestProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }
  latest_products:Product[]|any=[];

  ngOnInit(): void {
    for (let index = 0; index < 6; index++) {
      this.productService.getProductById(Math.floor(Math.random() * 100) + 1).subscribe((data:Product) => {
        this.latest_products.push(data);

      })
    }
  }

}
