import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  imgPath: string = 'assets/img/admin/register/';
  imgIconsPath: string = 'assets/img/admin/';

  constructor(private authService: AuthenticationService) {}

  register() {
    console.log('Try login');

    this.authService
      .login('login123s', 'aboba@mail', 'pass345')
      .subscribe((data) => {
        console.log('Logined!');
      });
  }
}
