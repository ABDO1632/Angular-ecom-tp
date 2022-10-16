import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interface/Product.interface';
import { TypeCategorie } from 'src/app/interface/TypeCategorie';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-top-categories',
  templateUrl: './top-categories.component.html',
  styleUrls: ['./top-categories.component.css']
})
export class TopCategoriesComponent implements OnInit {

  constructor(private productService: ProductService) { }
  categorieSubscription: Subscription | undefined;
  typeCategorie: typeof TypeCategorie = TypeCategorie;
  categorieLenght: number = (Object.keys(this.typeCategorie).length / 2) - 1;
  randomNumber: number = 0;
  categories: string[] = [];
  products: Product[] | any = [];
  carouselIndecator:number =0;
  ngOnInit(): void {


    for (let index = 0; index < 3; index++) {
      this.randomNumber = Math.floor(Math.random() * (this.categorieLenght - 0 + 1) + 0);
      this.categories.push(this.typeCategorie[this.randomNumber]);
      console.log("***random nb:" + this.randomNumber + "\n" + "categorie :" + this.typeCategorie[this.randomNumber]);

      this.categorieSubscription = this.productService.getProductByCategorie(this.typeCategorie[this.randomNumber]).subscribe((product: Product[]) => {
        this.products.push(Object.values(product)[0]);
        console.log("***categorie :" + this.typeCategorie[this.randomNumber]);

        console.log("***List of products :↓↓↓");

        console.log(Object.values(product)[0]);

      });
    }
    console.log("FINAL:");

    console.log(this.products);
    console.log(this.categories[1])

  }
  ngOnDestroy(): void {
    this.categorieSubscription?.unsubscribe();
  }
}
