import { Component } from '@angular/core';
import postjson from '../../../data.json';
import { Products } from '../../interface/products';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-decoration',
  templateUrl: './home-decoration.component.html',
  styleUrls: ['./home-decoration.component.css']
})
export class HomeDecorationComponent {

  products: Products[] = postjson;
  fragrancesCat: any;

  constructor(public _Router: Router) {
    this.fragrancesCat = this.products.filter((ele: any) => {
      return ele.category == 'home-decoration';
    });
  }

  getProductInfo(freId: any) {
    this._Router.navigate(['details', freId]);
  }
}
