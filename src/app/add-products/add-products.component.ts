import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UseradminService } from '../useradmin.service';
import { product } from 'src/entities/product';
import { User } from 'src/entities/user';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  addProductForm: FormGroup

  constructor(private fb: FormBuilder, private router: Router, private AdminAuth: UseradminService, private dataService: DataService) { }

  ngOnInit() {
    this.addProductForm = this.fb.group({
      "Name":["", Validators.required],
      "Animal":["", Validators.required],
      "Price":["", Validators.required],
      "Weight":["", Validators.required],
    });

  }
// not done, doesnt add a new product.
  onAddProductsSubmit():void {
    if(this.addProductForm.valid){

      let product = this.addProductForm.value as product;
      console.log("pre post til api ramt");
      console.log(product.Name);
      this.dataService.addProduct(product);
      //this.dataService.addProductTest(product);
      this.router.navigate(["/view-products"]); // should navigate to the showproducts list
    }
  }
}

