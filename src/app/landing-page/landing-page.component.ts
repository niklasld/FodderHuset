import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

 

  constructor(private auth: AuthService
    ) { 

      let testVariable = this.auth.isLoggedin;
    }

    
    
  ngOnInit() {
  }

}
