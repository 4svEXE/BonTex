import { Component, OnInit, OnDestroy } from '@angular/core';
import { SafeSvg } from 'src/app/core/interfaces';
import { SvgService } from 'src/app/core/services/svg.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { HeaderLinks, LinkInterface } from 'src/app/core/variables/header';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { User, UserService } from 'src/app/core/services/user.service';
import { FavoritesService } from 'src/app/core/services/favorites.service';
import { CartService } from 'src/app/core/services/cart.service';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  safeSvgCodes: SafeSvg = this.svgService.getSafeSvgCodes();
  links: LinkInterface[] = HeaderLinks;
  user: User | undefined;
  userFirstLetter: string = '';
  favLength: number = 0;
  cartLength: number = 0;
  private unsubscribe$: Subject<void> = new Subject<void>();
  private counterSubscription!: Subscription;
  private cartCounterSubscription!: Subscription;

  constructor(
    private svgService: SvgService,
    public ngxSmartModalService: NgxSmartModalService,
    public authService: AuthenticationService,
    private userService: UserService,
    private favService: FavoritesService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.refreshData();
    this.subscribeToFavCounter();
    this.subscribeToCartCounter();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.counterSubscription.unsubscribe();
    this.cartCounterSubscription.unsubscribe();
  }

  refreshData() {
    this.user = undefined;
    const userId = this.authService.getUserIdFromStorage();
    if (!userId) return;

    this.userService.findOne(userId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((user: User) => {
        this.user = user;
        this.userFirstLetter = user.email?.[0]?.toUpperCase() ?? '';
      });
  }

  subscribeToFavCounter() {
    this.counterSubscription = this.favService.getCounter()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((counter) => {
        this.favLength = counter;
        console.log(counter);
      });
  }

  subscribeToCartCounter() {
    this.cartCounterSubscription = this.cartService.getCartLength()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((counter) => {
        this.cartLength = counter;
      });
  }

  openCartModal() {
    this.ngxSmartModalService.getModal('cartModal').open();
  }
}
