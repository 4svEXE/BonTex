import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from './../services/authentication.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private userService: UserService,
    private router: Router,
    private authService: AuthenticationService

  ) {}

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.userId = params['id'];
      this.userService.findOne(this.userId).pipe(
        map((user: User) => this.user = user)
      ).subscribe()
    });
  }

  logOut(){
    this.authService.logOut()
    this.router.navigate(['']);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
