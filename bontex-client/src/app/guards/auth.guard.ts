import {
  CanActivateFn,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router: Router = inject(Router);
  const auth: AuthenticationService = inject(AuthenticationService);

  console.log('!auth.isAuthenticated(): ', !auth.isAuthenticated())
  if (!auth.isAuthenticated()) {
    router.navigate(['']);
    return false;
  }

  return true;
};
