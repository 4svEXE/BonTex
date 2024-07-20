import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './core/services/authentication.service';

import { SvgService } from './core/services/svg.service';
import { SafeSvg } from './core/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  safeSvgCodes: SafeSvg = this.svgService.getSafeSvgCodes();

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private svgService: SvgService,
  ) {}

  onLogout() {
    this.authService.logOut();
    this.router.navigate(['/']);
  }
}
