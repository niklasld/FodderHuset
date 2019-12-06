import { User } from 'src/entities/user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { product } from 'src/entities/product';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})


export class ViewProductsComponent implements OnInit {
  products: product[];
  LoggedInUserVP: User;


  constructor(private data: DataService, private auth: AuthService) { }

  ngOnInit() {
    //this.data.GetProducts();

    if(this.auth.LoggedinUser === undefined){
      this.auth.LoggedinUser.role = 'user';
    }



    this.LoggedInUserVP = this.auth.LoggedinUser;

    console.log(this.LoggedInUserVP.role);
    console.log(this.auth.LoggedinUser.role);


  }


  onDeleteProduct(id: number):void  {

    this.data.testProducts = this.data.testProducts.filter(products =>products.Id !==id);

  }

}
