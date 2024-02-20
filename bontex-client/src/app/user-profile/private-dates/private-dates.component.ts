import { Component, Input } from '@angular/core';
import { User } from './../../services/authentication.service';
import { UserProfileService } from 'src/app/shared/services/user-profile.service';
import { SafeHtml } from '@angular/platform-browser';
import { SvgService } from 'src/app/shared/services/svg.service';

@Component({
  selector: 'app-private-dates',
  templateUrl: './private-dates.component.html',
  styleUrls: ['./private-dates.component.scss'],
})
export class PrivateDatesComponent {
  @Input() user: User | undefined;
  safeSvgCodes: { [key: string]: SafeHtml } = {};

  constructor(
    private userProfile: UserProfileService,
    private svgService: SvgService
  ) {}

  ngOnInit(): void {
    this.safeSvgCodes = this.svgService.getSafeSvgCodes();
  }

  setEditorView() {
    this.userProfile.updateView('private-dates-editor');
  }
}
