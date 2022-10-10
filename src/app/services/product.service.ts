import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/Product.interface';


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
}
