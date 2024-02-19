import { Component } from '@angular/core';
import { UserProfileService } from 'src/app/shared/services/user-profile.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {

  constructor(
    // private activatedRoute: ActivatedRoute,
    // private userService: UserService,
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

  setEditorView(){
    this.userProfile.updateView('password-editor');
  }
}
