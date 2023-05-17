import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Child1Component} from '../child1/child1.component'
import { ProductsComponent } from 'src/products/products.component';
import { ProductComponent } from 'src/product/product.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksCountComponent } from './tasks-count/tasks-count.component'


@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    ProductsComponent,
    ProductComponent,
    FormsDemoComponent,
    AComponent,
    BComponent,
    FormDemoComponent,
    UserComponent,
    TasksComponent,
    AddTaskComponent,
    TasksListComponent,
    TasksCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
