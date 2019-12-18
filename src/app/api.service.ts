import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { product } from 'src/entities/product';
import { User } from 'src/entities/user';
import { animal } from 'src/entities/animal';
import { catchError } from 'rxjs/operators';
import { orders } from 'src/entities/orders';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  productURL = 'https://examapi20191201064109.azurewebsites.net/api/products';
  userURL = 'https://examapi20191201064109.azurewebsites.net/api/users';
  animalURL  = 'https://examapi20191201064109.azurewebsites.net/api/animals';
  ordersURL  = 'https://examapi20191201064109.azurewebsites.net/api/orders';
  cartUTL = 'https://examapi20191201064109.azurewebsites.net/api/orders';




  constructor(private http: HttpClient ) { }


  // methods til create cart og order







  GetAllUsers(): Observable<any> {
    return this.http.get(this.userURL);
  }

  CreateUser(newUser: User) {
    return this.http.post(this.userURL, newUser);
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

  makeProduct(product: product){

  }









  CreateProduct(product: product){



    console.log(product);





    const Url = 'http://localhost:53521/api/products';

    const body = JSON.stringify(
      product
    );

    const headers = new HttpHeaders({'Content-Type': 'application/json'});



    console.log(body);
    console.log(typeof(body) + " - type af body");
    console.log(typeof(product)+ " - type af product");



    return this.http.post(Url, body).subscribe(res => {
      console.log(res);
  });







 }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  PostProduct(product : product): Observable<product>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/text'
      })
    };
    console.log(product.Name);
    console.log("FØR PIPE FÆTTER");
    return this.http.post<product>('http://localhost:53521/api/products', JSON.stringify(product), httpOptions).pipe();



  }
}
