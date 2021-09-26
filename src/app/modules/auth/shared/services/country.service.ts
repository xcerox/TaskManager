import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country';

@Injectable()
export class CountryService {

  httpClient!: HttpClient;
  constructor(private httpBackend: HttpBackend) { 
    this.httpClient = new HttpClient(httpBackend);
  }

  getCountries(): Observable<Array<Country>> {
    return this.httpClient.get<Array<Country>>("/api/countries", { responseType: "json" })
  }
}
