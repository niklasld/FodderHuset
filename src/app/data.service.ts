import { Injectable } from '@angular/core';
import { product } from 'src/entities/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
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
  ]
  constructor() { }

  addProduct(product: product):void{

    this.testProducts.push(product);
  }
}
