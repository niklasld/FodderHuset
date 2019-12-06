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



  constructor(private data: DataService, private auth: AuthService) { }

  ngOnInit() {
    //this.data.GetProducts();

   
    console.log(this.auth.LoggedinUser.role);


  }

}
