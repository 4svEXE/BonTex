import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  currentView: string = 'private-dates';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  logOut() {
    this.authService.logOut();
    this.router.navigate(['']);
  }

  checkIsActive(str: string): boolean {
    return this.currentView === str;
  }

  setCurrentView(str: string) {
    this.currentView === str;
  }
}
