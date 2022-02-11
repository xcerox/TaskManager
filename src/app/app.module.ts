import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth/auth.module';
import { JwtInterceptorProvider } from '@auth/shared/utils/providers';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.session?.token || null
        }
      }
    })
  ],
  providers: [ JwtInterceptorProvider ],
  bootstrap: [AppComponent]
})
export class AppModule { }
