import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interface/Product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-unique-features-section',
  templateUrl: './unique-features-section.component.html',
  styleUrls: ['./unique-features-section.component.css']
})
export class UniqueFeaturesSectionComponent implements OnInit {
  productByIdSubscription : Subscription | undefined ;
  product: Product[] | any = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productByIdSubscription=this.productService.getProductById(4).subscribe(product => {
      this.product=product;
    })
  }

}
