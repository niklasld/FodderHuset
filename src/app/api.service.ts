
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { product } from 'src/entities/product';
import { User } from 'src/entities/user';
import { animal } from 'src/entities/animal';
//import { orders } from 'src/entities/orders';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  productURL = 'https://examapi20191201064109.azurewebsites.net/api/products';
  userURL = 'https://examapi20191201064109.azurewebsites.net/api/users';
  animalURL  = 'https://examapi20191201064109.azurewebsites.net/api/animals';
  ordersURL  = 'https://examapi20191201064109.azurewebsites.net/api/orders';
  

  constructor(private http: HttpClient, ) { }


  GetAllProducts(): Observable<any>{
    return this.http.get(this.productURL);
  }

  CreateProduct(newProduct: product){
    return this.http.post(this.productURL, newProduct);
  }

  GetAllUsers(): Observable<any> {
    return this.http.get(this.userURL);
  }

  CreateUser(newUser: User) {
    return this.http.post(this.userURL, newUser)
  }

  GetAllAnimals(): Observable<any>{
    return this.http.get(this.animalURL);
  }

  CreateAnimal(newAnimal: animal){
    return this.http.post(this.animalURL, newAnimal);
  }

  GetAllOrders(): Observable<any> {
    return this.http.get(this.ordersURL);
  }
}
