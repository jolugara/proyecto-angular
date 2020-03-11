import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../models/projects';
import { Global } from './global';
import { Observable } from 'rxjs/';

@Injectable()
export class ProjectService {
  public url: string;

  constructor(
      // tslint:disable-next-line:variable-name
      private _http: HttpClient
  ) {
      this.url = Global.url;
  }

  testService() {
    return 'Probando el servicio de Angular';
  }

  saveProject(project: Project): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let params = JSON.stringify(project);
    // tslint:disable-next-line:prefer-const
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    // tslint:disable-next-line:object-literal-shorthand
    return this._http.post(this.url + 'save-project', params, {headers: headers});
  }

  getProjects(): Observable<any> {

  // tslint:disable-next-line:prefer-const
  let headers = new HttpHeaders().set('Content-Type', 'application/json');

  // tslint:disable-next-line:object-literal-shorthand
  return this._http.get(this.url + 'projects', {headers: headers});
  }

  getProject(id): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    // tslint:disable-next-line:object-literal-shorthand
    return this._http.get(this.url + 'project/' + id, {headers: headers});
  }

  deleteProject(id): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    // tslint:disable-next-line:object-literal-shorthand
    return this._http.delete(this.url + 'project/' + id, {headers: headers});
  }

  updateProject(project: Project): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let params = JSON.stringify(project);
    // tslint:disable-next-line:prefer-const
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    // tslint:disable-next-line:object-literal-shorthand
    return this._http.put(this.url + 'project/' + project._id, params, {headers: headers});
  }

}
