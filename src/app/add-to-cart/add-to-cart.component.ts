import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../interface/products';
import {Location} from '@angular/common';
import postjson from "../../data.json"


@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent {

  products:Products[]=postjson;

  myProducts: any = [];
  test: any;
  newLocalStor: any = [];


  eleX: any = localStorage.getItem('myPr');
  xId = JSON.parse(this.eleX);

  constructor(public _ActivatedRoute: ActivatedRoute, public _router: Router,public _location:Location ) {
    for (const obj in this.xId) {
      for (let index = 0; index < this.products.length; index++) {
        if (parseInt(this.xId[obj]) == this.products[index].id) {
          this.myProducts.push(this.products[index]);
        }
      }
    }

  }

  remFromCart(remId: any) {
    this.newLocalStor = [];
    this.eleX = localStorage.getItem('myPr');
    this.xId = JSON.parse(this.eleX);

    for (const obj in this.xId) {
      for (let index = 0; index < this.myProducts.length; index++) {
        if (parseInt(this.xId[obj]) == this.products[index].id) {
          this.myProducts.push(this.products[index]);
        }
      }
    }

    this.myProducts = this.myProducts.filter((ele: any) => {
      return ele.id != remId;
    });

   
    for (let index = 0; index < this.myProducts.length; index++) {
      this.newLocalStor.push(this.myProducts[index].id);
    }

    localStorage.setItem('myPr', JSON.stringify(this.newLocalStor));
   
  }
  backHome() {
    this._router.navigate(['home']);
  }
  backLastPage() {
    this._location.back();
  }
}
