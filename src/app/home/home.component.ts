import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggingIn: boolean;

  constructor() { }

  ngOnInit() {
  }

  login() {
    this.loggingIn = true;
  }

  isLoggingIn(): boolean {
    return this.loggingIn;
  }
}
