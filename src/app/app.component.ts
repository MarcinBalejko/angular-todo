import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular-todo';

  constructor() {
   this.changeTitle('Todo-List-App')
  }

  changeTitle(title:string) {
    this.title = title
  }
}
