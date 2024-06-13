import { Component, OnInit } from '@angular/core';
import { SafeSvg } from 'src/app/core/interfaces';
import { SvgService } from 'src/app/core/services/svg.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { HeaderLinks, LinkInterface } from 'src/app/core/variables/header';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { User, UserService } from 'src/app/core/services/user.service';
import { FavoritesService } from 'src/app/core/services/favorites.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  safeSvgCodes: SafeSvg = this.svgService.getSafeSvgCodes();
  private counterSubscription!: Subscription;

  links: LinkInterface[] = HeaderLinks;
  user!: { name: string; id: string } | undefined;
  userFirstLetter: string = '';
  favLenght: number = 0;

  constructor(
    private svgService: SvgService,
    public ngxSmartModalService: NgxSmartModalService,
    public authService: AuthenticationService,
    private userService: UserService,
    private favService: FavoritesService
  ) {
    this.counterSubscription = this.favService
      .getCounter()
      .subscribe((counter) => {
        this.favLenght = counter;
      });
  }

  ngOnInit() {
    this.refreshData();
    this.favLenght = this.favService.getProducts().length;
  }

  refreshData() {
    this.user = undefined;
    if (!this.authService.getUserIdFromStorage()) return;

    this.authService.getUserId().subscribe((id) => {
      this.userService.findOne(id).subscribe((user: User) => {
        this.user = { name: user.email, id: user.id };
        this.userFirstLetter = this.user?.name?.[0]?.toUpperCase() ?? '';
      });
    });
  }

  openCartModal() {
    this.ngxSmartModalService.getModal('popupModal').open();
    // this.ngxSmartModalService.getModal('popupModal').close();
  }
}
