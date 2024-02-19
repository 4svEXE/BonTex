import { Component } from '@angular/core';
import { UserProfileService } from 'src/app/shared/services/user-profile.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {

  constructor(
    private userProfile: UserProfileService
  ) {}

  ngOnInit() {

  }

  setEditorView(){
    this.userProfile.updateView('password-editor');
  }
}
