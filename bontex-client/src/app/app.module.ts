import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { ModalComponent } from './shared/layouts/modal/modal.component';

import { LoginComponent } from './admin/components/login/login.component';
import { RegisterComponent } from './admin/components/register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UsersComponent } from './components/users/users.component';
import { UpdateUserProfileComponent } from './components/update-user-profile/update-user-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    UsersComponent,
    UpdateUserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
