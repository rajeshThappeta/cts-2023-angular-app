import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from './user/user.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private hc:HttpClient) { }

  //create user
  createNewUser(newUserObj){
    return this.hc.post('http://localhost:3000/users',newUserObj)
  }
  //get users
  getUsers(){
    return this.hc.get<User[]>('http://localhost:3000/users')
  }
}
