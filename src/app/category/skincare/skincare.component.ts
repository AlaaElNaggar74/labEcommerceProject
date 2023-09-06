import { Component } from '@angular/core';
import postjson from '../../../data.json';
import { Products } from '../../interface/products';
import { Router } from '@angular/router';


@Component({
  selector: 'app-skincare',
  templateUrl: './skincare.component.html',
  styleUrls: ['./skincare.component.css']
})
export class SkincareComponent {
  products: Products[] = postjson;
  fragrancesCat: any;

  constructor(public _Router: Router) {
    this.fragrancesCat = this.products.filter((ele: any) => {
      return ele.category == 'skincare';
    });
  }

  getProductInfo(freId: any) {
    this._Router.navigate(['details', freId]);
  }
}
