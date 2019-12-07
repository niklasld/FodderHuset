import { orders } from 'src/entities/orders';
import { animal } from './../entities/animal';
import { product } from 'src/entities/product';
import { ApiService } from './api.service';
import { Injectable, OnInit } from '@angular/core';

import { User } from 'src/entities/user';
import { element } from 'protractor';
import { cart } from 'src/entities/cart';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: User[];
  products: product[];
  animals: animal[];
  orders: orders[];
  cartProducts: cart[];

    testOrders: orders[] = [
      {
        _ID: 1,
        userID: 1,
        productID: 1,
        amount: 2,
        price: 12,
        localFilter: "TeamNice"
      },
      {
        _ID: 2,
        userID: 2,
        productID: 2,
        amount: 1,
        price: 21,
        localFilter: "TeamNice"
      },
      {
        _ID: 3,
        userID: 1,
        productID: 3,
        amount: 1,
        price: 32,
        localFilter: "TeamNice"
      }
    ]  


    testProducts: product[] =[
    {
      Id: 1,
      Name: 'Hamsterfusk',
      Price: 13.69,
      Weight: 2.5,
      imgLink: 'https://shop-cdn-m.mediazs.com/bilder/verselelaga/orlux/frutti/patee/kraftfoder/1/400/13066_PLA_Versele_Orlux_FRUTTI_PATEE_Kraftfutter_250g_1.jpg',
      foodFor: 'Hamster, Gustav'

    },
    {
      Id: 2,
      Name: 'Vovse guf',
      Price: 599,
      Weight: 12,
      imgLink: 'https://www.hooked4pets.dk/images/hunde%20foder/carnilove_fresh_dog_carp_trout_12kg-min-p.jpg',
      foodFor: 'Hund'

    },
    {
      Id: 3,
      Name: 'Almindeligt hundemad',
      Price: 249.99,
      Weight: 5.25,
      imgLink: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS_T-uWjoYyL7CtoUTsJc_ay8SF_hQazm9CrROgeoFEbNvVIJrD3zgnnVQ-t60B3XGMvOGbUt_z97iLY9cggE4LD7FYD945Z1tkhiXe0G20cAxLMK2leT7i&usqp=CAc',
      foodFor: 'Hund'

    },
    {
      Id: 4,
      Name: 'Ystads luksus Hundemad',
      Price: 999.99,
      Weight: 0.25,
      imgLink: 'data:image/jpeg;base64,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',
      foodFor: 'Hund, blåhval'

    },
    {
      Id: 5,
      Name: 'Katte grus/mad',
      Price: 125,
      Weight: 2,
      imgLink: 'https://www.hooked4pets.dk/images/19969193--p.jpg',
      foodFor: 'Kat'

    },
    {
      Id: 6,
      Name: 'Cat-nip',
      Price: 25,
      Weight: 0.1,
      imgLink: 'https://www.hooked4pets.dk/images/19969195-_rensdyr-p.jpg',
      foodFor: 'Kat'

    },
    {
      Id: 7,
      Name: 'Santas helpers, chopped up',
      Price: 439.25,
      Weight: 25,
      imgLink: 'https://www.hooked4pets.dk/images/19969195-_rensdyr-p.jpg',
      foodFor: 'Kat'

    },
    {
      Id: 8,
      Name: 'Hønse-guf',
      Price: 78,
      Weight: 1.34,
      imgLink: 'data:image/jpeg;base64,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',
      foodFor: 'Høns'

    },
    {
      Id: 9,
      Name: 'Canarie snask',
      Price: 44.97,
      Weight: 0.875,
      imgLink: 'https://shop-cdn-m.mediazs.com/bilder/verselelaga/orlux/frutti/patee/kraftfoder/1/400/13066_PLA_Versele_Orlux_FRUTTI_PATEE_Kraftfutter_250g_1.jpg',
      foodFor: 'Canarie-fugl'

    }

  ]

  getProductsTest(){

    console.log('get products kaldt i data service');
    return this.testProducts;

  }

  getProductTestId(id: number): product {
    //let tempProduct: product;
    this.testProducts.forEach(element => {
      if(element.Id === id) {
        console.log('product id found');
        return element;
      }
    });
    console.log('product id not found.');
    return null;
  }
  
  addProductTest(product: product):void{

    this.testProducts.push(product);
  }

  getAllTestOrders() {
    console.log('get orders kaldt i data service');

    return this.testOrders;

  }

  getTestOrdersByUserId(id: number): orders[] {
    let tempOrders: orders[];
    this.testOrders.forEach(element => {
      if(element.userID === id) {
        tempOrders.push(element);
      }
    })
    return tempOrders;
  }

  getTestOrdersById(id: number): orders {
    this.testOrders.forEach(element => {
      if(element._ID === id) {
        return element;
      }
    })
    return null;
  }

  getTestOrdersByProductId(id: number): orders[] {
    let tempOrders: orders[];
    this.testOrders.forEach(element => {
      if(element.productID === id) {
        tempOrders.push(element);
      }
    })
    return tempOrders;
  }

  addToTestOrders(userID: number, product: product, amount: number): void {
    let newOrder: orders;

    newOrder._ID = this.testOrders.length+1;
    newOrder.userID = userID;
    newOrder.productID = product.Id;
    newOrder.price = product.Price;
    newOrder.amount = amount;
    newOrder.localFilter = "TEAMNICE";

    this.testOrders.push(newOrder);
  }

  addProductToCart(product: product, amount: number): void {
    let newCartOrder: cart;
    
    newCartOrder.ID = this.cartProducts.length+1;
    newCartOrder.productID = product.Id;
    newCartOrder.amount = amount;
    newCartOrder.totalPrice = product.Price * amount;
    newCartOrder.localFilter = "TEAMNICE";

    this.cartProducts.push(newCartOrder);
  }

  getProductsInCart(): product[] {
    let cartProducts: product[];
    /*
    this.products.forEach(elementProduct => {
      this.cartProducts.forEach(elementCart => {
        if(elementCart.productID === elementProduct.Id) {
          cartProducts.push(elementProduct);
        }
      })
    })*/

    this.cartProducts.forEach(element => {
      cartProducts.push(this.getProductTestId(element.productID));
    })

    return cartProducts;
  }

  addCartProductsToOrder(): void {
    this.cartProducts.forEach(element => {
      this.addToTestOrders(+this.auth.LoggedinUser._id, this.getProductTestId(element.ID), element.amount);
    })
  }

  constructor(private api: ApiService, private auth: AuthService) { }


   public getUsers(){

     this.api.GetAllUsers().subscribe(res => {
      this.users = res;
    });
   }

  // public GetProducts(){

  //   //this.api.GetAllProducts().subscribe(res => {
  //     //this.products = res;
  //   //});

  // }
  // public GetAnimals(){
  //   this.api.GetAllAnimals().subscribe(res =>{ this.animals = res;});
  // }

  // public GetOrders() {
  //   this.api.GetAllOrders().subscribe(res =>{this.orders = res;});
  // }

  // public addProduct(product: product): void{
  //   console.log(product.Name);
  //   //this.api.PostProduct(product).subscribe(product => this.products.push(product));
  //   this.api.CreateProduct(product);
  // }
}
