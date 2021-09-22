import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/Operators';
import { Project } from '@admin/model/project';

@Injectable()
export class ProjectService {

  GET_PROJECT_URL: string = '/api/projects';

  constructor(private httpClient: HttpClient) { }

  getAllProjects(): Observable<Array<Project>> {
    return this.httpClient.get<Response>(this.GET_PROJECT_URL)
                    .pipe(
                      map((data: any) => {
                        return data.map((item:any) => {
                          item["id"] = item.projectID;
                          item["name"] = item.projectName;
                          item["startDate"] = item.dateOfStart;
                          return item;
                        })
                      }
                    ));
  }
}
