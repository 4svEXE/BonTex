import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthenticationService) {}

  login() {
    console.log('Try login');

    this.authService.login('login123s', 'aboba@mail', 'pass345').subscribe(data => {
      console.log('Logined!');
    });
  }
}
