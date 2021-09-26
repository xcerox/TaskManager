import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '@auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@auth/service/auth.service';
import { CanActivateGuardService } from '@auth/service/can-activate-guard.service';
import { JwtInterceptorService } from '@auth/service/jwt-interceptor.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CountryService } from './shared/services/country.service';
import { SignUpValidatorService } from './shared/services/sign-up-validator.service';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [AuthService, CanActivateGuardService, JwtInterceptorService, CountryService, SignUpValidatorService],
})
export class AuthModule { }
