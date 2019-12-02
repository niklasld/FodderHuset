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
  users: User[];

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router,
    private adminauth: UseradminService, private api: ApiService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      "email": ['', Validators.required],
      "password": ['', Validators.required]


    })
    this.getUsers();


  }

  public getUsers(){

    this.api.GetAllUsers().subscribe(res => {
      this.users = res;
    });
  }

  onLoginClick() : void {
    console.log(this.loginForm);
      // If this form is valid - then call the serve.


      if(this.loginForm.valid) {




        //tempslut
        let userLoginAttempt = this.loginForm.value as User;



        this.users.forEach(element => {


          if(userLoginAttempt.email === element.email && userLoginAttempt.password === element.password) {
            console.log("succesfull LOGIN!!! welcome "+ element.firstName);

            this.auth.LoggedinUser = userLoginAttempt;

            this.auth.login().subscribe(result => {
              this.router.navigate(['landing-page']);
            });

            if(element.role === 'admin'){
              console.log(element.email);
              console.log("admin else if ramt")
              this.adminauth.admin().subscribe(() =>
              this.router.navigate(['/landing-page']));
            }

          }

          else {console.log("auth service");


          this.auth.login().subscribe(result => {
            console.log(result)
            this.router.navigate(['landing-page']);
          });

         }
        });
        }  else{
      console.log("Cant. Must fix form errors first");

    }
  }

}
