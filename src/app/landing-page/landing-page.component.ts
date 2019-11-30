import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UseradminService } from '../useradmin.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

 

  constructor(private auth: AuthService, private adminAuth: UseradminService) { 

      let testVariable = this.auth.isLoggedin;
    }

    
    
  ngOnInit() {
  }

}
