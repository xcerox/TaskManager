import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '@auth/shared/models/country';
import { Observable } from 'rxjs';


@Injectable()
export class CountryService {

  private httpClient: HttpClient;
  
  constructor(private httpBackend: HttpBackend) { 
    this.httpClient = new HttpClient(httpBackend);
  }

  getCountries(): Observable<Array<Country>> {
    return this.httpClient.get<Array<Country>>("/api/countries", { responseType: "json" })
  }
}
