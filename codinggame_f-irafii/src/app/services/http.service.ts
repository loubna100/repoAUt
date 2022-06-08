import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string = 'http://localhost:8090/users/';
  urls:string = 'http://localhost:8090/api/';

  constructor(private http:HttpClient) { }

  public fetchAll():Observable<User[]> {
    return this.http.get<User[]>(this.url + 'findAll');
  }

  public addUser(user : User){
    return this.http.post<User>(this.url + 'add-user',user);
  }
/*
  public deleteUser(id: number){
    return this.http.delete(this.url + 'delete-user/' + id);
  }*/
  delete(id: number){
    return this.http.delete(this.urls+ 'userss/' + id);
  }
  public getUserById(id: number):Observable<Object>{
    return this.http.get(this.url + 'user/' + id);
  }
  /* public updateUser(id: number, user: User) {
    return this.http.put(this.url + 'update-user/' + id,user);
  } */
  updateUser(id: number, user: User): Observable<Object>{
    return this.http.put(`${this.url}/${id}`, user);
  }
  update(){

  }
}
