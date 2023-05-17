import { Component } from '@angular/core';
import { Task, TaskManagementService } from '../task-management.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {

  tasks:Task[];

  constructor(private tasksService:TaskManagementService){}

  ngOnInit(): void {
    this.tasksService.getTasksArray().subscribe({
      next:(tasksArray)=>{
        this.tasks=tasksArray;
      },
      error:(err)=>{ console.log(err)}
    })
  }

}
