import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interface/Product.interface';


import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-shop-left-sidebar',
  templateUrl: './shop-left-sidebar.component.html',
  styleUrls: ['../shop-grid/shop-grid.component.css']
})
export class ShopLeftSidebarComponent implements OnInit {
  products: Product[] | any = [];
  originalProducts: Product[] | any = [];
  categories: [] | any = [];
  limitNumber: number | any = 20;
  keyword: string | any = "";
  pricesValues: number[] = [1, 2, 3, 4];
  categorie: string | any = "sunglasses";
  categorieSubscription: Subscription | undefined;
  productSubscription: Subscription | undefined;
  matchWord: string | any = "best";

  limitForm = new FormGroup({
    numberPage: new FormControl('', [Validators.required, Validators.min(1), Validators.max(100)]),
    keywordPage: new FormControl('', [Validators.required]),

  });
  categorieForm = new FormGroup({
    categoriePage: new FormControl('', [Validators.required]),
  });


  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.callApiProductCategories();
    this.callApiProducts();
  }
  callApiProducts(): void {
    //originalProducts
    this.productSubscription = this.productService.getProducts(this.limitNumber).subscribe((products) => {
      this.products = Object.values(products)[0];
      this.originalProducts = Object.values(products)[0];

      console.log("api** =");
      console.log(Object.values(products)[0]);
      console.log("my table** =");
      console.log(this.products);
    });
  }
  callApiSearchProducts(): void {
    this.productSubscription = this.productService.SearchProducts(this.limitNumber, this.keyword).subscribe((products) => {
      this.products = Object.values(products)[0];
      console.log(products);
    });
  }
  callApiProductCategories(): void {
    this.categorieSubscription = this.productService.getProductCategories().subscribe((category) => {
      this.categories = category;
      console.log("**categories ↓↓↓↓");

      console.log(category);
    });
  }
  callApiProductsByCategorie(): void {
    this.productSubscription == this.productService.getProductByCategorie(this.categorie).subscribe((product: Product[]) => {
      this.products = []
      this.products = Object.values(product)[0];
      console.log("***categorie :" + this.categorie);
      console.log("***products ↓↓↓:");
      console.log(Object.values(product)[0]);

    });

  }
  discountPrice(price: string, discountPercentage: string) {
    var p = Number(price) - (Number(price) * (Number(discountPercentage) / 100))
    return p.toFixed(2);
  }
  goToProductDetailsPage(id: number): void {
    this.router.navigate(['/product-details/' + id]);
  }


  sumbetLimitPage(): void {
    if (Object.values(this.limitForm.value)[0] == "") {
      this.limitNumber = 20;
    }
    else {
      this.limitNumber = Object.values(this.limitForm.value)[0];
    }
    if (Object.values(this.limitForm.value)[1] != "") {
      this.keyword = Object.values(this.limitForm.value)[1];
    }
    console.log(Object.values(this.limitForm.value));
    console.log("limit=>" + this.limitNumber + "||keyword=>" + this.keyword);
    this.callApiSearchProducts();
  }
  checkValue(event: any) {
    this.categorie = event;
    console.log(event);
    this.callApiProductsByCategorie();
  }
  filterProductsByPrice(priceValue: number) {
    console.log("***Filtered products:::");
    if (priceValue == 1) {
      this.products = this.originalProducts;
      this.products = this.products.filter((t: { price: number; }) => t.price > 0 && t.price <= 150);
    }
    if (priceValue == 2) {
      this.products = this.originalProducts;
      this.products = this.products.filter((t: { price: number; }) => t.price > 150 && t.price <= 350);

    }
    if (priceValue == 3) {
      this.products = this.originalProducts;
      this.products = this.products.filter((t: { price: number; }) => t.price > 350 && t.price <= 504);

    }
    if (priceValue == 4) {
      this.products = this.originalProducts;
      this.products = this.products.filter((t: { price: number; }) => t.price > 450);

    }

    console.log(this.products);
  }
  filterProductsByRate(rateValue: number) {
    console.log("***Rate products:::");
    if (rateValue == 1) {
      this.products = this.originalProducts;
      this.products = this.products.filter((t: { rating: number; }) => Math.round(t.rating) == 5);
    }
    if (rateValue == 2) {
      this.products = this.originalProducts;
      this.products = this.products.filter((t: { rating: number; }) => Math.round(t.rating) == 4);

    }
    if (rateValue == 3) {
      this.products = this.originalProducts;
      this.products = this.products.filter((t: { rating: number; }) => Math.round(t.rating) == 3);

    }
    if (rateValue == 4) {
      this.products = this.originalProducts;
      this.products = this.products.filter((t: { rating: number; }) => Math.round(t.rating) == 2);
    }
    if (rateValue == 5) {
      this.products = this.originalProducts;
      this.products = this.products.filter((t: { rating: number; }) => Math.round(t.rating) == 1);
    }
    console.log(this.products);
  }
  filterProductsByDiscount(dicountValue: number) {
    console.log("***Discount products:::");
    if (dicountValue == 1) {
      this.products = this.originalProducts;
      this.products = this.products.filter((t: { discountPercentage: number; }) => Math.round(t.discountPercentage) <= 5);
    }
    if (dicountValue == 2) {
      this.products = this.originalProducts;
      this.products = this.products.filter((t: { discountPercentage: number; }) => Math.round(t.discountPercentage) <= 20);

    }
    if (dicountValue == 3) {
      this.products = this.originalProducts;
      this.products = this.products.filter((t: { discountPercentage: number; }) => Math.round(t.discountPercentage) <= 25);

    }
    console.log(this.products);
  }
  sortProducts(event: any): void {
    //this.products=this.originalProducts;
    //this.products.sort((a: { price: number; }, b: { price: number; }) => a.price - b.price);
    if (this.matchWord == "price") {
      this.products = this.originalProducts;
      this.products.sort((a: { price: number; }, b: { price: number; }) => a.price - b.price);
    }
    else {
      this.products = this.products.sort((a: { rating: number; }, b: { rating: number; }) => b.rating - a.rating);
    }
    console.log("Sort=>: " + this.matchWord);


  }
  roundNumberArray(numberOfStars: number) {
    let numberOfStarsRounded = Math.round(numberOfStars);
    let stars = [];
    for (let index = 0; index < 5; index++) {
      if (index < numberOfStarsRounded) {
        stars.push('1');
      }
      else {
        stars.push('0');
      }

    }
    return stars
  }
  ngOnDestroy(): void {
    this.categorieSubscription?.unsubscribe();
    this.productSubscription?.unsubscribe();
  }

}
