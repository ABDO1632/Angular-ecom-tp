
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interface/Product.interface';
import { User } from 'src/app/interface/User.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | any;
  routeSubscriptions: Subscription | any;
  user:User|any;
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

  constructor(private productService: ProductService, private avtiveRoute: ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
    this.routeSubscriptions = this.avtiveRoute.params.subscribe(params => {
      console.log(params['id']);
      this.productService.getProductById(params['id']).subscribe(product => {
        this.product = product;
        console.log(product.images);

      })
    })

  }
  goToShopCartPage(id:number){
    this.router.navigate(['/shopCart/'+id])
  }
  ngOnDestroy(): void {
    this.routeSubscriptions?.unsubscribe();
  }
  discountPrice(price:string,discountPercentage:string){
    var p=Number(price)-(Number(price)*(Number(discountPercentage)/100))
    return p.toFixed(2);
  }
  public checkLocalStorage(){
    var exist:boolean=false;
    if (localStorage.getItem("currentUser")) {
      exist=true;
    }
    else{
      exist=false;
    }
    return exist;
  }
  public getLocalStorage(){
    if(this.checkLocalStorage()){
      var u:string|any=localStorage.getItem("currentUser");
      this.user=JSON.parse(u);
    }
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
