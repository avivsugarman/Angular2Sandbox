import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `                           
    <input [value]="titleGenerator()">
    {{ titleGenerator() }}
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  private title: string = 'My First Todo Title !!!';

  constructor() { }

  ngOnInit() {
  }

  titleGenerator() {
    return 'This is not the title you are looking for';
  }
}
