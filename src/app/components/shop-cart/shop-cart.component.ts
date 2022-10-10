import { Component, OnInit } from '@angular/core';
import { ShopCart } from 'src/app/interface/ShopCart.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {
  shopCartProducts:ShopCart[]| any=[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getShoppingCartByUser(5).subscribe((data:ShopCart) => {
      this.shopCartProducts = (Object.values(data)[0])[0];
      console.log("data:");
      console.log((Object.values(data)[0])[0]);

      console.log("Table:");
      console.log(this.shopCartProducts.products);
    })
  }

}
