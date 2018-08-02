import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskCenterComponent } from './task-center/task-center.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { HomeComponent } from './home/home.component';





const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'tasklist', component: TaskCenterComponent},
  {path : 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
