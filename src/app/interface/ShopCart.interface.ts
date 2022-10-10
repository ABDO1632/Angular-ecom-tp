import { Product } from "./Product.interface";


export interface ShopCart{
      id: number;
      products: Product[];
      total: number;
      discountedTotal: number;
      userId: number;
      totalProducts: number;
      totalQuantity: number;
}
