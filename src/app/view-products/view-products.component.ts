import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  constructor(private dataService: DataService, private auth: AuthService) { }

  ngOnInit() {
    console.log("user:", this.auth.LoggedinUser);
  }

  onDeleteProduct(id: number):void  {
  
    this.dataService.testProducts = this.dataService.testProducts.filter(products =>products.AnimalId !==id);


  }


}
