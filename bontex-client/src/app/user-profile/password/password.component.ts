import { Component, Input, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/shared/services/user-profile.service';
import { User } from './../../services/authentication.service';
import { SafeHtml } from '@angular/platform-browser';
import { SvgService } from 'src/app/shared/services/svg.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {
  @Input() user: User | undefined;
  safeSvgCodes: { [key: string]: SafeHtml } = {};
  hidePassword = true;

  constructor(
    private userProfile: UserProfileService,
    private svgService: SvgService
  ) {}

  ngOnInit(): void {
    this.safeSvgCodes = this.svgService.getSafeSvgCodes();
  }

  setEditorView(): void {
    this.userProfile.updateView('password-editor');
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
}
