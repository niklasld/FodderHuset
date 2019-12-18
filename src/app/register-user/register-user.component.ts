import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/entities/user';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})

export class RegisterUserComponent implements OnInit {
  
  registerForm : FormGroup;

  constructor(private fb: FormBuilder, private data: DataService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      "firstName": ['', Validators.required],
      "lastName": ['', Validators.required],
      "email": ['', Validators.email],
      "password": ['', Validators.required],
    })
  }
  onRegisterClick() : void {
    console.log(this.registerForm);

      // If this form is valid - then call the serve.
      if(this.registerForm.valid) {
        let user = this.registerForm.value as User;
        console.log("haha"+ user.email);
        this.data.addUser(user);
        
        
      } else{
        console.log("Cant. Must fix register form errors first");
      }
      // then cal the server
  }
}
