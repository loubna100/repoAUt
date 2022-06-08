import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/authServices/auth.service';
import { User, LoginRequest } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(private authService: AuthService,
              private toastr: ToastrService,
              private router:Router) { }

  ngOnInit(): void {
  }
  login(data : LoginRequest){
    this.authService.login(data.email,data.password).subscribe(
      (response: any ) => {
        //console.log("data login", data);
        //sessionStorage.setItem('emailStock', data.email);

        this.toastr.success('Login succesfull', 'Welcome', {
          positionClass: 'toast-bottom-center',
          timeOut: 3000,
        });
        //this.router.navigateByUrl('/ptl');
      },
      (error) => {
        this.toastr.error(`${error.friendlyMessage}`, ` réessayer`, {
          positionClass: 'toast-bottom-center',
          timeOut: 3000,
        });
      }
    )

  }
  
}
