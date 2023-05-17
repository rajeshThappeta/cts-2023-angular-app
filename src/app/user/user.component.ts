import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm:FormGroup;
  usersList:User[]=[];
 

  constructor(private us:UserService){}

  ngOnInit(){
    this.userForm=new FormGroup({
      username:new FormControl(null),
      dob:new FormControl(null),
      email:new FormControl(null),
    })
  }

  onFormSubmit(){
    this.us.createNewUser(this.userForm.value).subscribe({
      next:(res)=>{
       //get users list from local API
       this.us.getUsers().subscribe({
        next:(users)=>{ 
          this.usersList=users;
        },
        error:(err)=>{
          console.log(err)
        }
       })
      },
      error:(error)=>{
        console.log("error is ",error)
      }
    })
  }
}


export interface User{
  id:number,
  username:string,
  dob:string,
  email:string
}