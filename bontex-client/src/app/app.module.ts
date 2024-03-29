import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxSmartModalModule } from 'ngx-smart-modal';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HeaderComponent } from './shared/layouts/header/header.component';
import { ModalComponent } from './shared/layouts/modal/modal.component';

import { LoginComponent } from './admin/components/login/login.component';
import { RegisterComponent } from './admin/components/register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UsersComponent } from './components/users/users.component';
import { UpdateUserProfileComponent } from './components/update-user-profile/update-user-profile.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ThanksComponent } from './admin/components/register/thanks/thanks.component';
import { PrivateDatesComponent } from './user-profile/private-dates/private-dates.component';
import { PrivateDatesEditorComponent } from './user-profile/private-dates-editor/private-dates-editor.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { HeaderSmallScreensComponent } from './shared/layouts/header/header-small-screens/header-small-screens.component';
import { MobileTabBarComponent } from './shared/layouts/header/mobile-tab-bar/mobile-tab-bar.component';
import { PasswordComponent } from './user-profile/password/password.component';
import { PasswordEditorComponent } from './user-profile/password-editor/password-editor.component';
import { OrdersComponent } from './user-profile/orders/orders.component';
import { SelectedGoodsComponent } from './user-profile/selected-goods/selected-goods.component';
import { ReviewsComponent } from './user-profile/reviews/reviews.component';
import { LogoutComponent } from './user-profile/logout/logout.component';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FirstBannerComponent } from './pages/home/components/first-banner/first-banner.component';
import { RecomendetComponent } from './pages/home/components/recomendet/recomendet.component';
import { SecondBannerComponent } from './pages/home/components/second-banner/second-banner.component';
import { ReviewsHomePageComponent } from './pages/home/components/reviews-home-page/reviews-home-page.component';
import { AboutHomePageComponent } from './pages/home/components/about-home-page/about-home-page.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { ReviewCardComponent } from './shared/components/review-card/review-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    UsersComponent,
    UpdateUserProfileComponent,
    ThanksComponent,
    PrivateDatesComponent,
    PrivateDatesEditorComponent,
    ButtonComponent,
    HeaderSmallScreensComponent,
    MobileTabBarComponent,
    PasswordComponent,
    PasswordEditorComponent,
    OrdersComponent,
    SelectedGoodsComponent,
    ReviewsComponent,
    LogoutComponent,
    FooterComponent,
    HomeComponent,
    FirstBannerComponent,
    RecomendetComponent,
    SecondBannerComponent,
    ReviewsHomePageComponent,
    AboutHomePageComponent,
    ProductCardComponent,
    ReviewCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSmartModalModule.forRoot(),
    CarouselModule,
    BrowserAnimationsModule,
  ],
  providers: [
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
