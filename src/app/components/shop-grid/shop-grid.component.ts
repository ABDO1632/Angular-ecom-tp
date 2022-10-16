import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interface/Product.interface';


import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop-grid',
  templateUrl: './shop-grid.component.html',
  styleUrls: ['./shop-grid.component.css']
})
export class ShopGridComponent implements OnInit {
  products:Product[]|any=[];
  productSubscription : Subscription | undefined ;
  limitNumber:number| any=20;
  keyword:string|any="";
  matchWord: string | any = "best";

  limitForm= new FormGroup({
    numberPage:new FormControl('',[Validators.required, Validators.min(1),Validators.max(100)]),
    keywordPage:new FormControl('',[Validators.required]),

  });

  constructor(private productService: ProductService,private router:Router) { }

  ngOnInit(): void {
    this.callApiProducts();
  }
  callApiProducts():void {
    this.productSubscription=this.productService.getProducts(this.limitNumber).subscribe((products) => {
      this.products = Object.values(products)[0];
      console.log("api** =");
      console.log(Object.values(products)[0]);
      console.log("my table** =");
      console.log(this.products);

    });
  }
  callApiSearchProducts():void {
    this.productSubscription=this.productService.SearchProducts(this.limitNumber,this.keyword).subscribe((products) => {
      this.products = Object.values(products)[0];
      console.log(products);
    });
  }
  goToProductDetailsPage(id:number): void{
    this.router.navigate(['/product-details/'+id]);
  }


   sumbetLimitPage(): void{
    if(Object.values(this.limitForm.value)[0]==""){
      this.limitNumber=20;
    }
    else{
      this.limitNumber=Object.values(this.limitForm.value)[0];
    }
    if(Object.values(this.limitForm.value)[1]!=""){
      this.keyword=Object.values(this.limitForm.value)[1];
    }
    console.log(Object.values(this.limitForm.value));
    console.log("limit=>"+this.limitNumber+"||keyword=>"+this.keyword);
    this.callApiSearchProducts();
  }
  sortProducts(event: any): void {

    if (this.matchWord == "price") {
      this.products.sort((a: { price: number; }, b: { price: number; }) => a.price - b.price);
    }
    else {
      this.products = this.products.sort((a: { rating: number; }, b: { rating: number; }) => b.rating - a.rating);
    }
    console.log("Sort=>: " + this.matchWord);


  }
  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe();
  }

}
