import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo',
  template: '<h1>{{title}}' +
  '<todo-input></todo-input></h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string = 'Welcome to Angular2 Sandbox!';
}
