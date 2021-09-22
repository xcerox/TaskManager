import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '@admin/model/project';

@Injectable()
export class ProjectService {

  GET_PROJECT_URL: string = '/api/projects';

  constructor(private httpClient: HttpClient) { }

  getAllProjects(): Observable<Array<Project>> {
    return this.httpClient.get<Array<Project>>(this.GET_PROJECT_URL);
  }
}
