import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authServices/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authSerice: AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.authSerice.logOut();
  }

  userlogged():boolean{
    return this.authSerice.logged();
  }

  isPtl():boolean{
    return this.authSerice.rolePtl();
  }

  

  

  

  
  

}
