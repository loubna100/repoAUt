import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  
  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (sessionStorage.getItem('email') && sessionStorage.getItem('token')) {
      
      let token:any;
      token = sessionStorage.getItem('token')
      
      if(token != null)
      {
        req = req.clone({
          setHeaders: {
            
            Authorization: token
        }
        })
        //console.log("req cloooooooned");
        
      }
      
    }

    return next.handle(req);
    
  }
}
