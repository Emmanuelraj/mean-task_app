import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'  //routerModule
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';//
import {HttpModule} from '@angular/http';//if not added Error ---> StaticInjectorError(AppModule)


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskCenterComponent } from './task-center/task-center.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { HomeComponent } from './home/home.component';
import {TaskService} from './task.service'





@NgModule({
  declarations: [
    AppComponent,
    TaskCenterComponent,
    TaskListComponent,
    TaskDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule ,//import HttpClientModule after BrowserModule
    HttpModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
