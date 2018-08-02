import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']

})
export class TaskDetailComponent implements OnInit {

  @Input() task;

  @Output() updateTaskEvent= new EventEmitter();

  @Output() deleteTaskEvent= new EventEmitter();






  constructor() { }

  ngOnInit() {
  }



  updateTask()
  {
     console.log('update the task');

     this.updateTaskEvent.emit(this.task)


  }


  deleteTask()
   {
     console.log('delete Task');
     this.deleteTaskEvent.emit(this.task);

   }

}
