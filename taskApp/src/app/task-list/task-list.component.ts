import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {


@Input() tasks;
@Output() SelectTask = new EventEmitter;




  constructor() { }

  ngOnInit() {
  }


  onSelectTask(task)
  {
    console.log('i get selected'+task.items);
    this.SelectTask.emit(task);

  }

}
