import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { User } from 'src/entities/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedin = false;
  LoggedinUser: User = new User();



  constructor( )
  {}

  login(User: User): Observable<boolean> {

    this.isLoggedin = true;
    return of(true).pipe(
      delay(1000),
      tap(val => this.LoggedinUser = User)
    );


  }

  logout(): void {
    this.isLoggedin = false;
  }
}
