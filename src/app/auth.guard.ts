// auth.guard.ts
import { AuthService, canActivateFn } from './auth.service';
import { Router } from '@angular/router';

export function canActivateFactory(authService: AuthService, router: Router) {
  return canActivateFn(authService, router);
}
