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
    private adminauth: UseradminService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      "email": ['', Validators.required],
      "password": ['', Validators.required]
    })
  }

  onLoginClick() : void {
    console.log(this.loginForm);
      // If this form is valid - then call the serve.


      if(this.loginForm.valid) {
        //hent api user liste

        //tempstart
        let users: User[];
        users = this.createlist(users);
        //tempslut
        let userLoginAttempt = this.loginForm.value as User;


        users.forEach(element => {
          if(userLoginAttempt.email === element.email && userLoginAttempt.password === element.password) {
            console.log("succesfull LOGIN!!! welcome "+ element.firstName);

            this.auth.LoggedinUser = userLoginAttempt;

            this.auth.login().subscribe(result => {
              this.router.navigate(['landing-page']);
            });

          }
          if(element.role == 'admin'){
            console.log("admin else if ramt")
            this.adminauth.admin().subscribe(() =>
            this.router.navigate(['/landing-page']));
          }

          else if(this.loginForm.value.email == 'user@gmail.dk'){
            this.adminauth.admin().subscribe(() =>
            this.router.navigate(['/landing-page']));

          }else {console.log("auth service");

          // else if(this.loginForm.value.email == 'user@gmail.dk'){
          //   this.adminauth.admin().subscribe(() =>
          //   this.router.navigate(['/landing-page']));

          // }


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



  createlist(users) : Array<User> {

    users = [
      {_id: '1',
      firstName: 'peter',
      lastName: 'pedal',
      email: 'user@gmail.dk',
      password: '123',
      role: 'admin'},

      {_id: '2',
      firstName: 'Anders',
      lastName: 'Andersen',
      email: 'Anders@gmail.dk',
      password: '1234',
      role: 'user'},

      {_id: '3',
      firstName: 'Thomas',
      lastName: 'Arnoldsen',
      email: 'ThomasA@gmail.dk',
      password: '12345',
      role: 'user'},

    ];
    return users;

  }


}
