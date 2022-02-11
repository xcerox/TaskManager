import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterLoggerService {
  private ROUTER_LOGGER: string = "/api/routerlogger";
  private CONTENT_TYPE: string = "content-type";

  private httpClient: HttpClient;
  private currentUserName: string = ""; 

  constructor(private httpBackend: HttpBackend) { 
    this.httpClient = new HttpClient(httpBackend);
  }

  create(userName: string, url: string): Observable<Object> {
    const message = this.formatMessage(userName, url);
    return this.httpClient.post(this.ROUTER_LOGGER, message, {headers: new HttpHeaders().set(this.CONTENT_TYPE, "text/plain")});
  }

  private formatMessage(userName: string, url: string): string {
    return `${new Date().toLocaleDateString()}: ${userName} navigates to ${url}`; 
  }
}
