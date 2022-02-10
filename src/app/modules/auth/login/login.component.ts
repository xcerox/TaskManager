import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@auth/shared/models/user';
import { AuthService } from '@auth/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = <User>{};
  loginError: string = "";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()){
      this.router.navigateByUrl("/admin/dashboard");
    }
  }

  onLogin(): void {
    this.authService.login(this.user).subscribe(() => {
      this.loginError = "";
      this.router.navigateByUrl("/admin/dashboard");
    }, (err: any) => {
      this.loginError = "Invalid Username Or Password";
      console.error(err);
    });
  }
}
