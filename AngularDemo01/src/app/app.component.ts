import { Component } from '@angular/core';
import { Login } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  login: Login;

  dologin(userName: HTMLInputElement, password: HTMLInputElement) {
    console.log(userName.value + '=====' + password.value);
  }
}
