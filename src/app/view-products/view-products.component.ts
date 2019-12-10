import { product } from './../../entities/product';
import { User } from 'src/entities/user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})


export class ViewProductsComponent implements OnInit {
  products: product[];
  LoggedInUserVP: User;
  addToCartForm: FormGroup;


  constructor(private data: DataService, private auth: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
    //this.data.GetProducts();

    if(this.auth.LoggedinUser === undefined){
      this.auth.LoggedinUser.role = 'user';
    }



    this.LoggedInUserVP = this.auth.LoggedinUser;

    console.log(this.LoggedInUserVP.role);
    console.log(this.auth.LoggedinUser.role);

    this.addToCartForm = this.fb.group({
      //"id":[, ],
      "amount":["", Validators.required],
    });


  }


  onDeleteProduct(id: number):void  {

    this.data.testProducts = this.data.testProducts.filter(products =>products.Id !==id);

  }

  onAddProductToCart(id: number) {
    if(this.addToCartForm.valid){
      //let test = this.addToCartForm.value;

      this.data.addProductToCart(this.data.getProductTestId(id),this.addToCartForm.value);
    }
    //this.data.addProductToCart(this.data.getProductTestId(id), amount);

  }

}
