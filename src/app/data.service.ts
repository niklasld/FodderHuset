import { animal } from './../entities/animal';
import { product } from 'src/entities/product';
import { ApiService } from './api.service';
import { Injectable, OnInit } from '@angular/core';

import { User } from 'src/entities/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: User[];
  products: product[];
  animals: animal[];
  //orders: orders[];

  constructor(private api: ApiService) { }


  public getUsers(){

    this.api.GetAllUsers().subscribe(res => {
      this.users = res;
    });
  }

  public GetProducts(){
    let prod : product[];

    this.api.GetAllProducts().subscribe(res => {
      this.products = res;
    });

  }
  public GetAnimals(){
    this.api.GetAllAnimals().subscribe(res =>{ this.animals = res;});
  }

  public GetOrders() {
    this.api.GetAllOrders().subscribe(res =>{this.orders = res;});
  }
}
