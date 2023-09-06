import { Component } from '@angular/core';
import postjson from '../../../data.json';
import { Products } from '../../interface/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fragrances',
  templateUrl: './fragrances.component.html',
  styleUrls: ['./fragrances.component.css'],
})
export class FragrancesComponent {
  products: Products[] = postjson;
  fragrancesCat: any;

  constructor(public _Router: Router) {
    this.fragrancesCat = this.products.filter((ele: any) => {
      return ele.category == 'smartphones';
    });
  }

  getProductInfo(freId: any) {
    this._Router.navigate(['details', freId]);
  }
}
