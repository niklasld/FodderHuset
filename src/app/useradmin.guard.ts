import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UseradminService } from './useradmin.service';

@Injectable({
  providedIn: 'root'
})


export class UseradminGuard implements CanActivate {
  
  constructor (private useradminService: UseradminService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if (this.useradminService.isAdmin){
        
        return true;
      } 
      else {
        return false;
      }
  }
  
}
