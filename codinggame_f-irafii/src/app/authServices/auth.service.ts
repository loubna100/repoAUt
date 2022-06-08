import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from "rxjs/operators";
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /* public isAuth!:boolean;
  public userAuth:any;
  public token!:string;
  private user!:User; */

  constructor(private httpClient: HttpClient,
            private toastr: ToastrService,
              private router:Router) { }

  login(email:string, password:string){
    return this.httpClient.post<any>("http://localhost:8090/login", {email, password,}).pipe(
      map(userData => {
        console.log(userData);
        /* console.log(userData.ROLE);
        console.log("looooog",typeof userData.ROLE); */
        let role=userData.roles
        console.log(role);
        sessionStorage.setItem("email", email);
        let tokenStr = userData.Authorization;
        sessionStorage.setItem("token", tokenStr);
        sessionStorage.setItem("role", role);
        this.rolePtl();
         
        
         if(role === '[ADMIN, USER]'){
          this.router.navigateByUrl('/');
          
        } if(role === '[PTL, USER]'){
          this.router.navigateByUrl('/technologie');
          
        }if(role === '[RECRUTEUR, USER]'){
          //this.router.navigateByUrl('/');
        } 
        return userData;
      })
      );
  }

  public isAdmin!:boolean;

   logged():any{
    
    let user = sessionStorage.getItem('email');
    if(user != null){
      return true;
    }else false

  }
  rolePtl():any{
    let user = sessionStorage.getItem('role');
    if(user === '[PTL, USER]'){
      return true;
    }else false;
  }
  
   /* isUserLoggedIn():boolean {
    let user = sessionStorage.getItem('email');
     console.log("-_-",user);
    return !(user === null); 
    if (!(user === null)){
      return true;
    }return false;
    
  } */
  
  logOut() {
    //localStorage.removeItem("emailStock");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("role");
  }


  /* login(email:string,password:string){
    let user;
    this.users.forEach(u=>{
      if(u.email==email && u.password==password){
        user=u;
        this.token=btoa(JSON.stringify({email:u.email,role:u.role}));
      }
    });
    if(user){
      this.isAuth=true;
      this.userAuth=user;
      console.log(this.isAuth);

    }
    else{
      this.isAuth=false;
      this.userAuth=undefined;
    }
  } */

  /* public isAdmin(){
    if(this.userAuth){
      if(this.userAuth.roles.indexOf('admin')>-1)
        return true;
        console.log("admin");

    }
    return false;
  } */

  /* public saveAuthUser(){
    if(this.userAuth){
      localStorage.setItem('authToken',this.token);
    }
  } */

  /* public loadAuthUserFromLocalStorage(){
    let t=localStorage.getItem('authToken');
    if(t){
      let user=JSON.parse(atob(t));
      this.userAuth={email:user.email,role:user.role}
      this.isAuth=true;
      this.token=t;
    }
  } */

  /* public removeTokenFromLocalStorage(){
    localStorage.removeItem('authToken');
    this.isAuth=false;
    //this.token="out";
    this.userAuth=undefined;

  } */

}
