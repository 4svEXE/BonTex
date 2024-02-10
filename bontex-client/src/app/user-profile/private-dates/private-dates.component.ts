import { Component } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../shared/services/user.service';
import { User } from './../../services/authentication.service';
import { UserProfileService } from 'src/app/shared/services/user-profile.service';

@Component({
  selector: 'app-private-dates',
  templateUrl: './private-dates.component.html',
  styleUrls: ['./private-dates.component.scss'],
})
export class PrivateDatesComponent {
  imgPath = 'assets/img/user-profile/';
  private sub!: Subscription;
  user!: User;
  userId!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private userProfile: UserProfileService
  ) {}

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.userId = params['id'];
      this.userService
        .findOne(this.userId)
        .pipe(map((user: User) => (this.user = user)))
        .subscribe();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  setEditorView(){
    this.userProfile.updateView('private-dates-editor');
  }
}
