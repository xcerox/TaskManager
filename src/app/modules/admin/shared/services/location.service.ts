import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Location } from '@admin/model/location';
import { LocationUtil } from '@admin/shared/utils/location-util';

@Injectable()
export class LocationService {

  private LOCATION_URL: string = "/api/clientlocations";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Array<Location>> {
    return this.httpClient.get<Array<Location>>(this.LOCATION_URL, { responseType: "json" }).pipe(map((data: any) => data.map(LocationUtil.objectToLocation)));
  }
}
