import { Component, OnInit } from '@angular/core';
import { DataTrasnferService } from '../data-trasnfer.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit{
  
  posts:Post[]=[];

  //inject dependency of DataTransferService class
  constructor(private ds:DataTrasnferService){}

  ngOnInit(): void {
    //consume the Observable 
    this.ds.getData().subscribe({
      next:(postsData)=>{
        this.posts=postsData;
      },
      error:(error)=>{
        console.log("err isn ",error)
      }
    })
  }
  
}



//create custom post type
export interface Post{
  userId:number;
  id:number;
  title:string;
  body:string;
}