import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Products } from '../interface/products';
import postjson from "../../data.json"
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  prodDetails: any;
  prodId: any;
 
  x: any =localStorage.getItem("myPr");
  myProduct=JSON.parse(this.x)?JSON.parse(this.x): [];
  porx: any = {};


  products:Products[]=postjson;
 

  constructor(public _ActivatedRoute: ActivatedRoute, public _router: Router ,public _location:Location) {
    this.prodId = this._ActivatedRoute.snapshot.paramMap.get('proId');

    this.prodDetails = this.products.find((ele: any) => {
      return ele.id == this.prodId;
    });


    console.log(this.prodDetails);
  }

  backHome() {
    // this._router.navigate(['home']);
    this._location.back();


  }
  addPro(proId: any) {
 

    if (this.myProduct.length == 0) {
      this.myProduct.push(proId);
      localStorage.setItem("myPr",JSON.stringify(this.myProduct))

    } else {
      this.myProduct=this.myProduct.filter((ele:any)=>{
      
        return ele != proId;

      });
     this.myProduct.push(proId);

     localStorage.setItem("myPr",JSON.stringify(this.myProduct))
    
    }
  }

  goToCartList() {
    this._router.navigate(['addTocartx'], {
      queryParams: this.myProduct,
    });
  }
}
