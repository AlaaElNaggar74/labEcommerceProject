import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { MainproductcompComponent } from './mainproductcomp/mainproductcomp.component';
import { CategoryComponent } from './category/category.component';
import { FragrancesComponent } from './category/fragrances/fragrances.component';
import { GroceriesComponent } from './category/groceries/groceries.component';
import { HomeDecorationComponent } from './category/home-decoration/home-decoration.component';
import { LaptopsComponent } from './category/laptops/laptops.component';
import { SkincareComponent } from './category/skincare/skincare.component';
import { SmartphonesComponent } from './category/smartphones/smartphones.component';

const routes: Routes = [
  {
    path: '',
    component: MainproductcompComponent,

    children: [
      {
        path: '',
        redirectTo:"home",
        pathMatch:"full"
      },
      {
        path: 'home',
        component: ProductsListComponent,
      },
      {
        path: 'addTocartx',
        component: AddToCartComponent,
      },
      {
        path: 'signup',
        component: SignUpComponent,
      },
      {
        path: 'signin',
        component: SignInComponent,
      },
      {
        path: 'details/:proId',
        component: ProductDetailsComponent,
      },
    ],
  },
  {
    path:"category",
    component:CategoryComponent,
    children:[
      {
        path:"",
        redirectTo:"fragrances",
        pathMatch:"full"
      },
      {
        path:"fragrances",
        component:FragrancesComponent
      },
      {
        path:"groceries",
        component:GroceriesComponent
      },
      {
        path:"home-decoration",
        component:HomeDecorationComponent
      },
      {
        path:"laptops",
        component:LaptopsComponent
      },
      {
        path:"skincare",
        component:SkincareComponent
      },
      {
        path:"smartphones",
        component:SmartphonesComponent
      },


    ]
  },

  {
    path: '**',
    component: NotfoundComponent,
  },
];
// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full',

//   },
//   {
//     path: 'home',
//     component: ProductsListComponent,
//   },
//   {
//     path: 'addTocartx',
//     component: AddToCartComponent,
//   },
//   {
//     path: 'signup',
//     component: SignUpComponent,
//   },
//   {
//     path: 'signin',
//     component: SignInComponent,
//   },
//   {
//     path: 'details/:proId',
//     component: ProductDetailsComponent,
//   },
//   {
//     path: '**',
//     component: NotfoundComponent,
//   },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
