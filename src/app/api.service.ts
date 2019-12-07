
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { product } from 'src/entities/product';
import { User } from 'src/entities/user';
import { animal } from 'src/entities/animal';
import { Person } from 'src/entities/Person';
//import { orders } from 'src/entities/orders';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  productURL = 'https://localhost:44323/api/people';
  userURL = 'https://examapi20191201064109.azurewebsites.net/api/users';
  animalURL  = 'https://examapi20191201064109.azurewebsites.net/api/animals';
  ordersURL  = 'https://examapi20191201064109.azurewebsites.net/api/orders';
  cartUTL = 'https://examapi20191201064109.azurewebsites.net/api/orders';

  constructor(private http: HttpClient, ) { }


  GetAllProducts(): Observable<any>{
    return this.http.get(this.productURL);
  }

  CreateProduct(newProduct: product) /*Observable<any>*/ {
    console.log("createProduct ramt");
    const newPerson = new Person();
    newPerson.FirstName = product.name;
    newPerson.LastName = "Testersen";


    const test = '{"FirstName": "'+newPerson.FirstName+'", "LastName": "'+newPerson.LastName+'" }';
    var header = new HttpHeaders({'Content-Type': 'application/json'});
    //header.append('Content-Type','application/json');
    header.append("Access-Control-Allow-Origin", "*");
    //var requestOptions = new HttpRequest({method: requestMethod.Post, headers: header});
    return this.http.post(this.productURL, newPerson,/*{headers: header}*/).subscribe(
      (val) => {
          console.log("POST call successful value returned in body", val);
        }/*,
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      }*/);;
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
