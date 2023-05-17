import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Post } from './a/a.component';


@Injectable({
  providedIn: 'root'
})

export class DataTrasnferService {

  //inject HttpClient obj
  constructor(private hc:HttpClient) { }

  getData(){
    //make HTTP GET req
    return this.hc.get<Post[]>('https://jsonplaceholder.typicode.com/posts')//returns Observable
  }
}
