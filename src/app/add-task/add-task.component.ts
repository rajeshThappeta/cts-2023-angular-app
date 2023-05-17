import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import { TaskManagementService } from '../task-management.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

     taskForm:FormGroup;
     constructor(private taskService:TaskManagementService){}

    ngOnInit(){
      this.taskForm=new FormGroup({
        taskName:new FormControl(null)
      })
    }

    addTask(){
      this.taskService.addNewTask(this.taskForm.value)
    }
}
