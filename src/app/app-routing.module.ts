import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShopGridComponent } from './components/shop-grid/shop-grid.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"products",component:ShopGridComponent},
  {path:"product-details/:id",component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
