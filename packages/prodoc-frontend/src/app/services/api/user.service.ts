import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { CrudMethods } from 'app/lib/crud-methods';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudMethods {

  constructor(public http: HttpClient) {
    super();
    this.entity = 'user';
  }

  /**
  * Gets data from an ApiRoute
  * @param id (OPTIONAL) {number | boolean} Get with specified Id
  * @param queryParams (OPTIONAL) {any} Get with query params
  */
  public getMe(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/api/${this.entity}/me`);
  }

  /**
  * Posts data for an ApiRoute
  * @param id (OPTIONAL) {number | boolean} Get with specified Id
  * @param queryParams (OPTIONAL) {any} Get with query params
  */
  public promotion(data): Observable<any> {
    return this.http.post(`${environment.baseUrl}/api/${this.entity}/promotion`, data);
  }

  /**
  * Gets data from an ApiRoute
  * @param id (OPTIONAL) {number | boolean} Get with specified Id
  * @param queryParams (OPTIONAL) {any} Get with query params
  */
  public getNextRole(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/api/${this.entity}/next-role`);
  }

}