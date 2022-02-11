import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Provider } from "@angular/core";
import { JwtInterceptorService } from "../services/jwt-interceptor";

export const JwtInterceptorProvider: Provider = { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true };