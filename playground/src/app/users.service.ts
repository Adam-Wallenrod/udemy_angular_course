import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users;

  constructor(private http: HttpClient) { }

   getUsers(): any {
    return  this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id: number){
   return  this.http.get('https://jsonplaceholder.typicode.com/users/' + id);  
  }
}
