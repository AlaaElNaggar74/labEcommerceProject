import { Component } from '@angular/core';
import postjson from '../../../data.json';
import { Products } from '../../interface/products';
import { Router } from '@angular/router';



@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent {


  products: Products[] = postjson;
  fragrancesCat: any;

  constructor(public _Router: Router) {
    this.fragrancesCat = this.products.filter((ele: any) => {
      return ele.category == 'groceries';
    });
  }

  getProductInfo(freId: any) {
    this._Router.navigate(['details', freId]);
  }
}
