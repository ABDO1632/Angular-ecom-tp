import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interface/Product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService) { }
  products:Product[]|any=[];
  carouselIndecator:number =0;
  productSubscription : Subscription | undefined ;

  ngOnInit(): void {
    for (let index = 0; index < 4; index++) {
      this.productSubscription=this.productService.getProductById(Math.floor(Math.random() * 100) + 1).subscribe((data:Product) => {
        this.products.push(data);

      })
    }
  }

  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe();
  }

}
