import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { CrudMethods } from 'app/lib/crud-methods';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DegreeService extends CrudMethods {

  constructor(public http: HttpClient) {
    super();
    this.entity = 'degree';
  }

  /**
  * Gets data from an ApiRoute
  * @param id (OPTIONAL) {number | boolean} Get with specified Id
  * @param queryParams (OPTIONAL) {any} Get with query params
  */
  public getTypes(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/api/${this.entity}/types`);
  }

}