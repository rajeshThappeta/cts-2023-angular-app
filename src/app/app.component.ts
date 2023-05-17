import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TestService]
})

export class AppComponent  {
 
}


