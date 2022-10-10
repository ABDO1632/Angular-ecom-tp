
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interface/Product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:Product|any;
  routeSubscriptions: Subscription|any;
  constructor(private productService:ProductService,private avtiveRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSubscriptions=this.avtiveRoute.params.subscribe(params => {
      console.log(params['id']);
      this.productService.getProductById(params['id']).subscribe(product => {
        this.product=product;
        console.log(product.images);

      })
    })

  }
  //

}
