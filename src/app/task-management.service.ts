import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {

  tasks:Task[]=[];
  tasksBehavilurObject=new BehaviorSubject(this.tasks)

  addNewTask(newTask){
    //update tasks array with lastest task
      this.tasks.push(newTask);
      //update BehaviourSubject
      this.tasksBehavilurObject.next(this.tasks)
  }

  getTasksArray(){

      return this.tasksBehavilurObject.asObservable()
  }

  constructor() { }

}



//create TAsk type
export interface Task{
  taskName:string;
}