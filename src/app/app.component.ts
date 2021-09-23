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

  isUserLogged(): boolean {
    return this.authService.isUserLogged;
  }

  getUserName(): string {
    return this.authService.currentUserName;
  }

  logout(): void {
    return this.authService.logout();
  }
  
}
