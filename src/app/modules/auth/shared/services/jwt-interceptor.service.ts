import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';

@Injectable()
export class JwtInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let user = JSON.parse(localStorage.session) || {token: ""};

    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${user.token}`
      }
    })

    return next.handle(req);
  }
}
