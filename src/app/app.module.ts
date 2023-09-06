import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { MainproductcompComponent } from './mainproductcomp/mainproductcomp.component';
import { CategoryComponent } from './category/category.component';
import { SmartphonesComponent } from './category/smartphones/smartphones.component';
import { LaptopsComponent } from './category/laptops/laptops.component';
import { FragrancesComponent } from './category/fragrances/fragrances.component';
import { SkincareComponent } from './category/skincare/skincare.component';
import { GroceriesComponent } from './category/groceries/groceries.component';
import { HomeDecorationComponent } from './category/home-decoration/home-decoration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    SignUpComponent,
    SignInComponent,
    NavbarComponent,
    NotfoundComponent,
    AddToCartComponent,
    MainproductcompComponent,
    CategoryComponent,
    SmartphonesComponent,
    LaptopsComponent,
    FragrancesComponent,
    SkincareComponent,
    GroceriesComponent,
    HomeDecorationComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
