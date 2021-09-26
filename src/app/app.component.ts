import { Component } from '@angular/core';
import { AuthService } from '@auth/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TaskManager';

  constructor(private authService: AuthService) {}

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
