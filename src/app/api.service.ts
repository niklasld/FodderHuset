import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { product } from 'src/entities/product';
import { User } from 'src/entities/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  productURL: string = 'Adressen til vores API PRODUCTS';
  userURL: string = "ADressen til vores API USER"

  constructor(private http: HttpClient, ) { }

     
  GetAllProducts() : Observable<any>{
    return this.http.get(this.productURL)
  }

  CreateProduct(newProduct: product){
    return this.http.post(this.productURL, newProduct);
  }

  GetAllUsers() : Observable<any> {
    return this.http.get(this.userURL)
  }

  CreateUser(newUser: User) {
    return this.http.post(this.userURL, newUser)
  }
}
