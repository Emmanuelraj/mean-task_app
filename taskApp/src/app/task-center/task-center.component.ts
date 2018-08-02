import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import {TaskModel} from './../task-model';

import {TaskService} from '../task.service'

@Component({
  selector: 'task-center',
  templateUrl: './task-center.component.html',
  styleUrls: ['./task-center.component.css'],
  providers : [TaskService]
})
export class TaskCenterComponent implements OnInit {


  addButton : boolean = false;

  addMsgBtn : boolean = false;


  editMsgBtn : boolean = false;

  deleteMsgBtn : boolean = false;


/**
    tasks: TaskModel[]=[
      {"_id":"1","items":"item 1"},
      {"_id":"2","items":"item 2"}
    ];
*/

      selectedTask:TaskModel;


      tasks: Array<TaskModel>;//for


  constructor(private taskService:TaskService)
  {
      console.log();
   }


// This initform like formBacking
  ngOnInit() {

  this.taskService.getTask()
    .subscribe(resTask => this.tasks = resTask);
  }





 onSelectTask(task: any)  // this is first available in task-list from that
 {
   this.selectedTask = task
   console.log(this.selectedTask);
 }



 addTask(task)
 {
    var count =0;
    console.log('fire this function');
    this.addButton = true;

 }


onSubmitAdd(task)
{
  console.log('onSubmit Add function');
  this.taskService.addTask(task)
    .subscribe(resAddNewTask => {
      this.tasks.push(resAddNewTask)
      this.selectedTask = resAddNewTask;
    });

    if(task === null)
    {
      this.addMsgBtn = false;
    }
    else
    {
      this.addMsgBtn = true;
    }
}



onUpdateTaskEvent(task)
{
  this.taskService.updateTask(task)
  .subscribe(resUpdateTask =>task =resUpdateTask);
  this.selectedTask = null;

  this.editMsgBtn = false;

}


onDeleteTaskEvent(task)
{
  console.log('delete Task');
  let taskArray  = this.tasks;
  this.taskService.deleteTask(task)
    .subscribe(resDeleteNewTask =>
      {
      for(var i=0;i< taskArray.length;i++)
    {
       if(taskArray[i]._id === task._id)
        {
          taskArray.splice(i,1);
        }
    }
});

this.deleteMsgBtn = false;
}



}//class
