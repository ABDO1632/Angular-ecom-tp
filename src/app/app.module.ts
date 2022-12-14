import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ShopGridComponent } from './components/shop-grid/shop-grid.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import {ButtonModule} from 'primeng/button';
import {GalleriaModule} from 'primeng/galleria';
import {ImageModule} from 'primeng/image';
import { FaqComponent } from './components/faq/faq.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import {TableModule} from 'primeng/table';
import { LatestProductsComponent } from './components/latest-products/latest-products.component';
import { TopCategoriesComponent } from './components/top-categories/top-categories.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopLeftSidebarComponent } from './components/shop-left-sidebar/shop-left-sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { ShopexSectionComponent } from './components/shopex-section/shopex-section.component';
import { TrendingProductsSectionComponent } from './components/trending-products-section/trending-products-section.component';
import { ShippingPageComponent } from './components/shipping-page/shipping-page.component';
import { OrderCompletePageComponent } from './components/order-complete-page/order-complete-page.component';
import { UniqueFeaturesSectionComponent } from './components/unique-features-section/unique-features-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ShopGridComponent,
    HeaderSectionComponent,
    ProductDetailsComponent,
    FaqComponent,
    AboutUsComponent,
    ShopCartComponent,
    LatestProductsComponent,
    TopCategoriesComponent,
    SponsorsComponent,
    ContactUsComponent,
    NotFoundComponent,
    ShopLeftSidebarComponent,
    LoginComponent,
    ShopexSectionComponent,
    TrendingProductsSectionComponent,
    ShippingPageComponent,
    OrderCompletePageComponent,
    UniqueFeaturesSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    GalleriaModule,ImageModule,
    TableModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
