import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/Product.interface';

@Component({
  selector: 'app-trending-products-section',
  templateUrl: './trending-products-section.component.html',
  styleUrls: ['./trending-products-section.component.css']
})
export class TrendingProductsSectionComponent implements OnInit {
  @Input() products:Product[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  discountPrice(price:string|number,discountPercentage:string|number){
    var p=Number(price)-(Number(price)*(Number(discountPercentage)/100))
    return p.toFixed(2);
  }
}
