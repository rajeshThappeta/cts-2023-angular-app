import { Component } from '@angular/core';
import { TaskManagementService } from '../task-management.service';

@Component({
  selector: 'app-tasks-count',
  templateUrl: './tasks-count.component.html',
  styleUrls: ['./tasks-count.component.css']
})
export class TasksCountComponent {

  tasksCount:number=0;

  constructor(private tasksService:TaskManagementService){}

  ngOnInit(): void {
    this.tasksService.getTasksArray().subscribe({
      next:(tasksArray)=>{
        this.tasksCount=tasksArray.length;
      },
      error:(err)=>{ console.log(err)}
    })
  }

}
