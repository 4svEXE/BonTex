import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // entries = {
  //   name: 'Update profile',
  //   link: 'update-profile',
  // };

  title = 'BonTex';

  constructor(private router: Router) {}

  navigateTo(value: string) {
    this.router.navigate(['../' + value]);
  }
}
