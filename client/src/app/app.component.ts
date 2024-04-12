import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './core/services/authentication.service';

import { SafeHtml } from '@angular/platform-browser';
import { SvgService } from './core/services/svg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
<<<<<<< HEAD:bontex-client/src/app/app.component.ts
  title = '';
=======
  title = 'BonTex';
>>>>>>> 06a4ef9649edc09ae3db6dfb0deac7c98f13384a:client/src/app/app.component.ts
  safeSvgCodes: { [key: string]: SafeHtml } = this.svgService.getSafeSvgCodes();

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private svgService: SvgService
  ) {}

  onLogout() {
    this.authService.logOut();
    this.router.navigate(['/']);
  }
}
