import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '@auth/shared/services/auth';
import { RouterLoggerService } from '@auth/shared/services/router-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'TaskManager';

  constructor(private authService: AuthService, private router: Router, 
    private routerLoggerService: RouterLoggerService) {}

  ngOnInit(): void {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          const userName = this.authService.getUserName() || "anonymous";
          this.routerLoggerService.create(userName, event.url);
        }
      });
  }

  isUserAllowed(role:string): boolean {
    return this.authService.isAuthenticated() && this.authService.isRoleExpected(role);
  }

  getUserName(): string {
    return this.authService.getUserName();
  }

  logout(): void {
    return this.authService.logout();
  }
  
}
