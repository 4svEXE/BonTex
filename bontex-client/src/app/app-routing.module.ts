import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/components/login/login.component';
import { RegisterComponent } from './admin/components/register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UpdateUserProfileComponent } from './components/update-user-profile/update-user-profile.component';
import { AuthGuard } from './guards/auth.guard'; // Correct import
import { PrivateDatesComponent } from './user-profile/private-dates/private-dates.component';


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
      canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    redirectTo: '', // You might want to remove this line if it's not intended
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'user',
    children: [
      {
        path: '',
        component: UserProfileComponent,
      },
      {
        path: ':id',
        component: UserProfileComponent,
        canActivate: [AuthGuard]
      },
    ],
  },
  {
    path: 'update-profile',
    component: UpdateUserProfileComponent,
    canActivate: [AuthGuard], // Use the AuthGuard class and provide it as an array
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
