
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
  product: Product | any;
  routeSubscriptions: Subscription | any;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor(private productService: ProductService, private avtiveRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSubscriptions = this.avtiveRoute.params.subscribe(params => {
      console.log(params['id']);
      this.productService.getProductById(params['id']).subscribe(product => {
        this.product = product;
        console.log(product.images);

      })
    })

  }
  ngOnDestroy(): void {
    this.routeSubscriptions?.unsubscribe();
  }
  discountPrice(price:string,discountPercentage:string){
    var p=Number(price)-(Number(price)*(Number(discountPercentage)/100))
    return p.toFixed(2);
  }
  roundNumberArray(numberOfStars: number) {
    let numberOfStarsRounded = Math.round(numberOfStars);
    let stars = [];
    for (let index = 0; index < 5; index++) {
      if(index<numberOfStarsRounded){
        stars.push('1');
      }
      else{
        stars.push('0');
      }

    }
    return stars
  }
}
