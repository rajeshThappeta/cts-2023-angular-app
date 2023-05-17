import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.css']
})
export class FormsDemoComponent implements OnInit {

   userForm:FormGroup;



  ngOnInit(): void {
   
    this.userForm=new FormGroup({
        username:new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(6)]),
        password:new FormControl(null),
        state:new FormControl(null),
        feedback:new FormControl(null),
        html:new FormControl(false),
        js:new FormControl(false),
        gender:new FormControl(null)
    })
  }


  //getters
  get username(){
    return this.userForm.get('username')
  }

  onFormSubmit(){
    console.log(this.userForm.value)
  }
}
