import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks = [
    { name: 'Wake-up' },
    { name: 'Eat breakfast' }
  ];
  task = null;

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.tasks.push({name:this.task});
    this.task = "";
  }

  onSelect(task): void {
    var index = this.tasks.indexOf(task);
    this.tasks.splice(index,1);
  }

}
