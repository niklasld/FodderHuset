import { Injectable } from '@angular/core';
import { product } from 'src/entities/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  testProducts: product[] = [
    {
     _Id: 1,
     Name: 'Hundemad',
     Price: 123,
     Weight: 3,
     imgLinlk: 'hej',
     AnimnalID: 3,
    },
    {
      _Id: 2,
      Name: 'Kattemad',
      Price: 5,
      Weight: 1,
      imgLinlk: 'hej',
      AnimnalID: 3,
    }
  ]
  constructor() { }
}
