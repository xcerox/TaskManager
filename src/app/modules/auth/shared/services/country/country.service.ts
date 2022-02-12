import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../../models/country';
import { CountryUtil } from '../../utils/country-util';

@Injectable()
export class CountryService {
  
  private ENDPOINT: string = "/api/contries";

  constructor(private httpClient: HttpClient) { }

  getById(id: number): Observable<Country> {
    return this.httpClient.get<Country>(`${this.ENDPOINT}/searchbycontryid/${id}`, { responseType: "json" }).pipe(map((data: any) => data.map(CountryUtil.objectToType)))
  }

  getAll(): Observable<Array<Country>> {
    return this.httpClient.get<Array<Country>>(this.ENDPOINT, { responseType: "json" }).pipe(map((data: any) => data.map(CountryUtil.objectToType)));
  }

  create(country: Country): Observable<Country> {
    return this.httpClient.post<Country>(this.ENDPOINT, CountryUtil.TypeToObject(country), { responseType: "json" }).pipe(map(CountryUtil.objectToType));
  }

  update(country: Country): Observable<Country> {
    return this.httpClient.put<Country>(this.ENDPOINT, CountryUtil.TypeToObject(country), { responseType: "json" }).pipe(map(CountryUtil.objectToType));
  }

  delete(id: number): Observable<string> {
    return this.httpClient.delete<string>(`${this.ENDPOINT}?CountryID=${id}`);
  }
  
}
