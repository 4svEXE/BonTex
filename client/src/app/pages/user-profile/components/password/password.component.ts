import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './../../../../core/services/authentication.service';
import { User, UserService } from './../../../../core/services/user.service';

import { SafeSvg } from 'src/app/core/interfaces';
import { SvgService } from 'src/app/core/services/svg.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss', '../../user-profile.component.scss'],
})
export class PasswordComponent implements OnInit {
  user: User | undefined;
  safeSvgCodes: SafeSvg = this.svgService.getSafeSvgCodes();

  hidePassword = true;

  constructor(
    private svgService: SvgService,
    private userService: UserService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    const id = this.authService.getUserIdFromStorage()
    if (id != null ){
      this.userService
      .findOne(id)
      .subscribe((user) => {
        this.user = user;
      });
    }
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
}
