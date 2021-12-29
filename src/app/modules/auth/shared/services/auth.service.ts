import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NewUser } from '../models/new-user';
import { User } from '../models/user';
import { RoleUtils } from '../utils/role-utils';

@Injectable()
export class AuthService {

  private AUTH_URL: string = "/auth/authenticate";
  private AUTH_REGISTER_URL: string = "/auth/register";
  private XSRF_TOKEN: string = "XSRF-REQUEST-TOKEN";
  private httpClient!: HttpClient; 

  constructor(private httpBackend: HttpBackend, private jwtHelperService: JwtHelperService) { 
    this.httpClient = new HttpClient(httpBackend);
  }

  login(user: User): Observable<any>{
    return this.httpClient.post<any>(this.AUTH_URL, user, {responseType: "json", observe: "response"})
    .pipe(map(response => {
      if (response) {
        localStorage.session = JSON.stringify({token: response.body.token});
        localStorage.XSRFRequestToken = response.headers.get(this.XSRF_TOKEN);
      }
      return response.body;
    }))
  }

  logout(): void {
    localStorage.removeItem("session");
  }

  private getToken(): string {
    return JSON.parse(localStorage.session || "{}")?.token || null;
  }

  isAuthenticated(): boolean {
    return !this.jwtHelperService.isTokenExpired(this.getToken());
  }

  getUserName(): string {
    return this.decodeToken().userName;
  }

  private decodeToken():any {
    return this.jwtHelperService.decodeToken(this.getToken());
  };

  isRoleExpected(componentRole: string): boolean {
    return  RoleUtils.getValuePerRole(componentRole) >= RoleUtils.getValuePerRole(this.decodeToken().role);
  }

  getUserByEmail(email: string): Observable<any> {
    return this.httpClient.get<any>(`/api/getUserByEmail/${email}`, { responseType: "json" });
  }

  register(newUser: NewUser): Observable<any> {
    this.httpClient = new HttpClient(this.httpBackend);
    return this.httpClient.post<any>(this.AUTH_REGISTER_URL, newUser, { responseType: "json", observe: "response" })
      .pipe(map(response => {
        if (response) {
          localStorage.session = JSON.stringify({token: response.body.token});
          localStorage.XSRFRequestToken = response.headers.get(this.XSRF_TOKEN);
        }
        return response.body;
      }));
  }
}
