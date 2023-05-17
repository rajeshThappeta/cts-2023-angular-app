import {Component,Input,EventEmitter,Output, OnInit, OnChanges, OnDestroy, SimpleChanges} from '@angular/core'
import { TestService } from 'src/app/test.service';


@Component({
    selector:'app-child1',
    templateUrl:'./child1.component.html',
    styleUrls:['./child1.component.css']
})
export class Child1Component {

}