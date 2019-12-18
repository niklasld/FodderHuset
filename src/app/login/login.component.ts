import { DataService } from './../data.service';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, EmailValidator, Validators } from '@angular/forms';
import { User } from 'src/entities/user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UseradminService } from '../useradmin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router,
    private adminauth: UseradminService, private api: ApiService, private data: DataService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      "email": ['', Validators.required],
      "password": ['', Validators.required]


    })

    this.data.getUsers();


  }


  onLoginClick() : void {
    console.log(this.loginForm);

      if(this.loginForm.valid) {

        let userLoginAttempt = this.loginForm.value as User;



        //this.data.users.forEach(element => {
        this.data.testUsers.forEach(element => {

          if(userLoginAttempt.email === element.email && userLoginAttempt.password === element.password) {
            console.log("succesfull LOGIN!!! welcome "+ element.firstName);

            this.auth.LoggedinUser = element;

            if(element.role === 'admin'){
              console.log(element.email);
              console.log("admin else if ramt")
              this.adminauth.admin().subscribe(() =>
              this.router.navigate(['admin-portal']));
            }

            else {
              console.log("user else ramt");
              this.auth.login(element).subscribe(result => {
                this.router.navigate(['landing-page']);
              });

            }











         }
        });
        }
  }

}
