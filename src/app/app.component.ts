import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  loggedIn : boolean;

  constructor() {
    this.title = 'Loan Application';
    this.loggedIn = false;
  }

  setLoggedIn(loggedIn : boolean){
    this.loggedIn = loggedIn;
  }
}
