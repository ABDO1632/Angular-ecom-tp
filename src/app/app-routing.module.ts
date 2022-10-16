import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FaqComponent } from './components/faq/faq.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderCompletePageComponent } from './components/order-complete-page/order-complete-page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShippingPageComponent } from './components/shipping-page/shipping-page.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { ShopGridComponent } from './components/shop-grid/shop-grid.component';
import { ShopLeftSidebarComponent } from './components/shop-left-sidebar/shop-left-sidebar.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"products",component:ShopGridComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"not-found",component:NotFoundComponent},
  {path:"shop-left-cart",component:ShopLeftSidebarComponent},
  {path:"shop-grid",component:ShopGridComponent},
  {path:"shipping-payement",component:ShippingPageComponent},
  {path:"order-complete",component:OrderCompletePageComponent},

  {path:"faq",component:FaqComponent},
  {path:"login",component:LoginComponent},

  {path:"product-details/:id",component:ProductDetailsComponent},
  {path:"shopCart/:id",component:ShopCartComponent},
  {path:"**",component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
