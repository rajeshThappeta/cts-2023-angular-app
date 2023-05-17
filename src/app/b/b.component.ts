import { Component, OnInit } from '@angular/core';
import { DataTrasnferService } from '../data-trasnfer.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor(private ds:DataTrasnferService){}

  ngOnInit(): void {
   
  }
}
