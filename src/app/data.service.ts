<<<<<<< HEAD
import { cart } from './../entities/cart';
import { Injectable } from '@angular/core';
=======
import { animal } from './../entities/animal';
>>>>>>> API
import { product } from 'src/entities/product';
import { ApiService } from './api.service';
import { Injectable, OnInit } from '@angular/core';

import { User } from 'src/entities/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
<<<<<<< HEAD
  testProducts: product[] = [
    {
      AnimalId: 1, 
      Name: 'Hundebiks',
      Animal: 'Hund',
      Price: 230,
      Weight: 5000
    },
    {
      AnimalId: 2, 
      Name: 'Kattehaps',
      Animal: 'Kat',
      Price: 130,
      Weight: 1300
    },
    {
      AnimalId: 3, 
      Name: 'Hamsterfusk',
      Animal: 'Hamster',
      Price: 89,
      Weight: 800
    }
  ];
  testCart: cart[] = [
    {
      cartId: 1,
      userId: 1,
      productId: 1,
      amount: 2
    },
    {
      cartId: 2,
      userId: 1,
      productId: 2,
      amount: 3
    }
  ];
  constructor() { }

  addProductToCart(userId: number, productId: number, amount: number) {
    length = this.testCart.length;
    let id = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    let newCartItem: cart = {
      cartId: id,
      userId: userId,
      productId: productId,
      amount: amount
    };

    this.testCart.push(newCartItem);
  }
=======

  users: User[];
  products: product[];
  animals: animal[];

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


>>>>>>> API
}
