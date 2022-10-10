import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/Product.interface';
import { ShopCart } from '../interface/ShopCart.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("https://dummyjson.com/products?limit=10");
  }
  public getProductById(id:number): Observable<Product> {
    return this.httpClient.get<Product>("https://dummyjson.com/products/"+id);
  }
  public getShoppingCartByUser(id:number): Observable<ShopCart> {
    return this.httpClient.get<ShopCart>("https://dummyjson.com/carts/user/"+id);
  }
}
