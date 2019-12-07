import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { product } from 'src/entities/product';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})


export class ViewProductsComponent implements OnInit {
  products: product[];



  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.GetProducts();
    console.log("finished loading");


  }

  /*onDeleteProduct(id: number):void  {
  
    this.dataService.testProducts = this.dataService.testProducts.filter(products =>products.AnimalId !==id);


  }*/


}
