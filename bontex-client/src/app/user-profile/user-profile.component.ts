import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { User, UserService } from './../shared/services/user.service';
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
  user!: User;
  userId!: string;

  private sub!: Subscription;

  navigationItems = [
    { label: 'Особисті дані', view: 'private-dates' },
    { label: 'Пароль', view: 'password' },
    { label: 'Мої замовлення', view: 'orders' },
    { label: 'Обрані товари', view: 'selected', showCounter: true, counter: 2 },
    { label: 'Мої відгуки', view: 'myReviews', showCounter: true, counter: 2 },
    { label: 'Вихід', view: 'logOut' }
  ];

  constructor(
    private authService: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userProfile: UserProfileService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.viewSubscription = this.userProfile.currentView$.subscribe(
      (newView) => {
        this.currentView = newView;
      }
    );

    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.userId = params['id'];
      this.userService
        .findOne(this.userId)
        .pipe(map((user: User) => (this.user = user)))
        .subscribe();
    });
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
