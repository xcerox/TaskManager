import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/Operators';
import { Project } from '@admin/model/project'
import { ProjectUtils } from '@admin/util/project-utils';

@Injectable()
export class ProjectService {

  private PROJECT_URL: string = '/api/projects';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Array<Project>> {
    return this.httpClient.get<Response>(this.PROJECT_URL).pipe(map((data: any) => data.map(ProjectUtils.objectToProject)));
  }

  create(project: Project): Observable<Project> {
    return this.httpClient.post<Response>(this.PROJECT_URL, ProjectUtils.projectToObject(project)).pipe(map(ProjectUtils.objectToProject));
  }

  update(project: Project): Observable<Project> {
    return this.httpClient.put<Response>(this.PROJECT_URL, ProjectUtils.projectToObject(project)).pipe(map(ProjectUtils.objectToProject));
  }

  delete(project: Project): Observable<string> {
    return this.httpClient.delete<string>(`${this.PROJECT_URL}?ProjectID=${project.id}`);
  }
}
