import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class CanActivateGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const isLogin = this.authService.isAuthenticated() && this.authService.isRoleExpected(route.data.role);
    !isLogin && this.router.navigate(["login"]);
    return isLogin;
  }
}
