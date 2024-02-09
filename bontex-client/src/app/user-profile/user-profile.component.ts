import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserProfileService } from '../shared/services/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  currentView: string = '';
  private viewSubscription!: Subscription;

  navigationItems = [
    { label: 'Особисті дані', view: 'private-dates' },
    { label: 'Пароль', view: 'profile-password' },
    { label: 'Мої замовлення', view: 'profile-orders' },
    { label: 'Обрані товари', view: 'profile-selected', showCounter: true, counter: 2 },
    { label: 'Мої відгуки', view: 'profile-myReviews', showCounter: true, counter: 2 },
    { label: 'Вихід', view: 'profile-logOut' }
  ];

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private userProfile: UserProfileService
  ) {}

  ngOnInit(): void {
    this.viewSubscription = this.userProfile.currentView$.subscribe(
      (newView) => {
        this.currentView = newView;
      }
    );
  }

  ngOnDestroy(): void {
    this.viewSubscription.unsubscribe();
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(['']);
  }

  checkIsActive(view: string): boolean {
    return this.currentView === view;
  }

  setCurrentView(view: string) {
    this.userProfile.updateView(view);
  }
}
