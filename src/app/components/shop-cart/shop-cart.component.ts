import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShopCart } from 'src/app/interface/ShopCart.interface';
import { User } from 'src/app/interface/User.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {
  shopCartProducts: ShopCart[] | any = [];
  productSubscription: Subscription | undefined;
  shopSubscription: Subscription | undefined;

  user: User | any;
  pictures: [] | any = [];
  idsOfProducts: Array<Number> | any = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    var u: string | any = localStorage.getItem("currentUser");
    this.user = JSON.parse(u);

    this.productSubscription = this.productService.getShoppingCartByUser(this.user.id).subscribe((data: ShopCart) => {
      this.shopCartProducts = (Object.values(data)[0])[0];
      //get pictures for shop cart
      this.shopCartProducts.products.forEach((item: any) => {
        this.idsOfProducts.push(item.id);
      });
      this.idsOfProducts.forEach((element: any) => {
        this.productSubscription = this.productService.getProductById(element).subscribe(product => {
          this.pictures.push(product.thumbnail);
        })
      });
    });
  }
  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe();
    this.shopSubscription?.unsubscribe();

  }
  shopCartAction(id: number) {
    this.shopSubscription = this.productService.deleteShopCart(id).subscribe((data) => {
      console.log(data);
    }
      ,
      error => {
        console.log("error => :" + error);
      })
  }
}
