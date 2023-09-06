import { Component } from '@angular/core';
import postjson from '../../../data.json';
import { Products } from '../../interface/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent {
  products: Products[] = postjson;
  fragrancesCat: any;

  constructor(public _Router: Router) {
    this.fragrancesCat = this.products.filter((ele: any) => {
      return ele.category == 'laptops';
    });
  }

  getProductInfo(freId: any) {
    this._Router.navigate(['details', freId]);
  }
}
