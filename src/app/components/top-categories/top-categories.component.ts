import { Component, OnInit } from '@angular/core';
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
  typeCategorie: typeof TypeCategorie = TypeCategorie;
  categorieLenght: number = (Object.keys(this.typeCategorie).length / 2) - 1;
  randomNumber: number = 0;
  categories: string[] = [];
  products: Product[] = [];
  ngOnInit(): void {
    for (let index = 0; index < 3; index++) {
      this.randomNumber = Math.floor(Math.random() * (this.categorieLenght - 0 + 1) + 0);
      this.categories.push(this.typeCategorie[this.randomNumber]);
      console.log("random nb:"+this.randomNumber +"\n"+ "categorie :"+this.typeCategorie[this.randomNumber]);
      this.productService.getProductByCategorie(this.typeCategorie[this.randomNumber]).subscribe( (product) =>{
        console.log(product);
      })


      /*this.productService.getProductByCategorie(this.typeCategorie[this.randomNumber]).subscribe(data => {
        this.products.push(Object.values(data)[0]);
        //{ key:"", value: "data[key]" }
        var obj: any = {};
        obj[this.typeCategorie[this.randomNumber]] = Object.values(data)[0];
        //this.products.push(obj);
        console.log("**********Categorie:"+this.typeCategorie[this.randomNumber]);
        console.log("**********Value products :"+Object.values(data)[0]);

      })*/
    }
    console.log(this.products);


  }

}
