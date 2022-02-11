import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth';

@Injectable()
export class CanActivateGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const isLogin = this.authService.isAuthenticated() && this.authService.isRoleExpected(route.data.role);
    !isLogin && this.router.navigate(["login"]);
    return isLogin;
  }
}
