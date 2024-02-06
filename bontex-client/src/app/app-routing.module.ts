import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/components/login/login.component';
import { RegisterComponent } from './admin/components/register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UpdateUserProfileComponent } from './components/update-user-profile/update-user-profile.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'login',
    component: LoginComponent,
    redirectTo: ''
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'users',
    children: [
      {
        path: '',
        component: UserProfileComponent,
      },
      {
        path: ':id',
        component: UserProfileComponent,
      }
    ],
  },
  {
    path: 'users/:id',
    component: UserProfileComponent,
  },
  {
    path: 'update-profile',
    component: UpdateUserProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
