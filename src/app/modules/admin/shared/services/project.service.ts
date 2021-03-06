import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '@admin/model/project'
import { ProjectUtil } from '@admin/shared/utils/project-util';
import { SearchOptions } from '@admin/model/search-options';

@Injectable()
export class ProjectService {

  private PROJECT_URL: string = '/api/projects';
  private XSRF_TOKEN: string = 'X-XSRF-TOKEN';
  private hideDetails: boolean = false;
  public onDetailsChange$: Subject<boolean>;

  constructor(private httpClient: HttpClient) { 
    this.onDetailsChange$ = new Subject<boolean>();
  }

  toggleDetails(): void {
    this.hideDetails = !this.hideDetails;
    this.onDetailsChange$.next(this.hideDetails);
  }

  getAll(): Observable<Array<Project>> {
    return this.httpClient.get<Response>(this.PROJECT_URL).pipe(map((data: any) => data.map(ProjectUtil.objectToProject)));
  }

  create(project: Project): Observable<Project> {
    const requestHeaders = new HttpHeaders().set(this.XSRF_TOKEN, localStorage.XSRFRequestToken);
    return this.httpClient.post<Response>(this.PROJECT_URL, ProjectUtil.projectToObject(project), {headers: requestHeaders}).pipe(map(ProjectUtil.objectToProject));
  }

  update(project: Project): Observable<Project> {
    return this.httpClient.put<Response>(this.PROJECT_URL, ProjectUtil.projectToObject(project)).pipe(map(ProjectUtil.objectToProject));
  }

  delete(project: Project): Observable<string> {
    return this.httpClient.delete<string>(`${this.PROJECT_URL}?ProjectID=${project.id}`);
  }

  findBy(options: SearchOptions): Observable<Array<Project>> {
    return this.httpClient.get<Response>(`${this.PROJECT_URL}/search/${options.field}/${options.value}`, {responseType: 'json'}).pipe(map((data: any) => data.map(ProjectUtil.objectToProject)));
  }

  findById(id: number): Observable<Project>{
    return this.httpClient.get<Project>(`${this.PROJECT_URL}/searchbyprojectid/${id}`, { responseType: "json" }).pipe(map(ProjectUtil.objectToProject));
  }
}