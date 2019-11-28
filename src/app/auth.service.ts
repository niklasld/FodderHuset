import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { User } from 'src/entities/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedin = false;
  LoggedinUser;
  
  constructor( )
  {}

  login(): Observable<boolean> {
    
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedin = true)
    );
  }
}
