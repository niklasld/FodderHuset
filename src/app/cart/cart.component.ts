import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { cart } from 'src/entities/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  constructor(private data: DataService) { }

  ngOnInit() {

  }

}
