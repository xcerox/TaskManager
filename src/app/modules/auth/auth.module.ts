import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '@auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AlertDirective } from './shared/directives/alert';
import { RepeaterDirective } from './shared/directives/repeater';
import { AboutComponent } from './about/about.component';
import { RouterLoggerService } from '@auth/service/router-logger';
import { AuthService } from './shared/services/auth';
import { CanActivateGuardService } from './shared/services/can-activate-guard';
import { JwtInterceptorService } from './shared/services/jwt-interceptor';
import { CountryService } from './shared/services/country';
import { SignUpValidatorService } from './shared/services/sign-up-validator';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    AlertDirective,
    RepeaterDirective,
    AboutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ LoginComponent, SignUpComponent, AboutComponent],
  providers: [AuthService, CanActivateGuardService, JwtInterceptorService, CountryService, SignUpValidatorService, RouterLoggerService],
})
export class AuthModule { }
