import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '@auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from '@auth/service/auth.service';
import { CanActivateGuardService } from '@auth/service/can-activate-guard.service';
import { JwtInterceptorService } from '@auth/service/jwt-interceptor.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [],
  providers: [AuthService, CanActivateGuardService, JwtInterceptorService],
})
export class AuthModule { }
