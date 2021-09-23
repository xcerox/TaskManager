import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { User } from '../models/user';
import { RoleUtils } from '../utils/role-utils';

@Injectable()
export class AuthService {

  private AUTH_URL: string = "/auth/authenticate";
  private XSRF_TOKEN: string = "XSRF-REQUEST-TOKEN";
  private httpclient!: HttpClient; 
  currentUserName!: string;
  isUserLogged: boolean = false;

  constructor(private httpBackend: HttpBackend, private jwtHelperService: JwtHelperService) { 
    this.httpclient = new HttpClient(httpBackend);
  }

  login(user: User): Observable<any>{
    return this.httpclient.post<any>(this.AUTH_URL, user, {responseType: "json", observe: "response"})
    .pipe(map(response => {
      if (response) {
        this.isUserLogged = true;
        this.currentUserName = response.body.userName;
        sessionStorage.session = JSON.stringify({token: response.body.token});
        sessionStorage.XSRFRequestToken = response.headers.get(this.XSRF_TOKEN);
      }
      return user;
    }))
  }

  logout(): void {
    sessionStorage.removeItem("session");
    this.isUserLogged = false;
  }

  private getToken(): string {
    return JSON.parse(sessionStorage.session)?.token || null;
  }

  isAuthenticated(): boolean {
    return !this.jwtHelperService.isTokenExpired(this.getToken());
  }

  private decodeToken():any {
    return this.jwtHelperService.decodeToken(this.getToken());
  };

  isRoleExpected(role: string): boolean {
    return  RoleUtils.getValuePerRole(role) <= RoleUtils.getValuePerRole(this.decodeToken().role);
  }
}
