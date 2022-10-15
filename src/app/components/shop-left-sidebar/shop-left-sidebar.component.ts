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
  products:Product[]|any=[];
  categories:[]|any=[];
  limitNumber:number| any=20;
  keyword:string|any="";
  categorie:string|any="sunglasses";
  categorieSubscription : Subscription | undefined ;

  limitForm= new FormGroup({
    numberPage:new FormControl('',[Validators.required, Validators.min(1),Validators.max(100)]),
    keywordPage:new FormControl('',[Validators.required]),

  });
  categorieForm= new FormGroup({
    categoriePage:new FormControl('',[Validators.required]),
  });
  constructor(private productService: ProductService,private router:Router) { }

  ngOnInit(): void {
    this.callApiProductCategories();
    this.callApiProducts();
  }
  callApiProducts():void {
    this.productService.getProducts(this.limitNumber).subscribe((products) => {
      this.products = Object.values(products)[0];
      console.log("api** =");
      console.log(Object.values(products)[0]);
      console.log("my table** =");
      console.log(this.products);
    });
  }
  callApiSearchProducts():void {
    this.productService.SearchProducts(this.limitNumber,this.keyword).subscribe((products) => {
      this.products = Object.values(products)[0];
      console.log(products);
    });
  }
  callApiProductCategories():void {
    this.productService.getProductCategories().subscribe((category) => {
      this.categories=category;
      console.log("**categories ↓↓↓↓");

      console.log(category);
    });
  }
  callApiProductsByCategorie():void {
    this.categorieSubscription=this.productService.getProductByCategorie(this.categorie).subscribe( (product: Product[]) =>{
      this.products=[]
       this.products=Object.values(product)[0];
      console.log("***categorie :"+this.categorie);
      console.log("***products ↓↓↓:");
      console.log(Object.values(product)[0]);

    });

  }
  discountPrice(price:string,discountPercentage:string){
    var p=Number(price)-(Number(price)*(Number(discountPercentage)/100))
    return p.toFixed(2);
  }
  goToProductDetailsPage(id:number): void{
    this.router.navigate(['/product-details/'+id]);
  }


   sumbetLimitPage(): void{
    console.log("CHeck null "+Object.values(this.limitForm.value)[0]);
    if(Object.values(this.limitForm.value)[0]==null){
      console.log("CHeck 2 ");

      this.limitNumber=Object.values(this.limitForm.value)[0];
    }
    else{
      this.limitNumber=20;
      console.log("CHeck 3 ");

    }
    if(Object.values(this.limitForm.value)[0]!=null){
      this.keyword=Object.values(this.limitForm.value)[1];
    }

    console.log(Object.values(this.limitForm.value));
    console.log("limit=>"+this.limitNumber+"||keyword=>"+this.keyword);
    this.callApiSearchProducts();
  }
  checkValue(event: any){
    this.categorie=event;
    console.log(event);
    this.callApiProductsByCategorie();
  }
}
