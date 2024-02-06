import { User } from './../services/authentication.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})

export class UserProfileComponent {
  userId!: string;
  private sub!: Subscription;
  user!: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.userId = params['id'];
      this.userService.findOne(this.userId).pipe(
        map((user: User) => this.user = user)
      ).subscribe()
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
