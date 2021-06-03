import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { getObjectCookie, getCookie, eraseCookie } from '../../utils/cookies.utils';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {

  public tokens: any;

  constructor(private http: HttpClient, private router: Router) { }

  /**
   * @param {string} email
   * @param {string} password
   * @returns {Observable<any>}
   *
   */
  public loginUser(email: string, password: string): Observable<any> {

    return this.http.post(`${environment.baseUrl}/api/login`, { email, password });

  }


  public createTokenData(token: string): void {

    eraseCookie('auth_token');

    const objToken: any = JSON.parse(token);
    const expires: number = (typeof objToken === 'object') ? objToken.token.expires_in : 21600;

    document.cookie = `auth_token=${token};Max-Age=${expires}`;

  }

  /**
   *
   * @returns {boolean}
   */
  public isLoggedIn(): boolean {

    const tokenString: string = getCookie('auth_token') || '{}';

    const token: any = JSON.parse(tokenString);

    let result = false;

    if (token.token) {
      result = true;
    }

    return result;

  }

  public logout(): void {

    eraseCookie('auth_token');

    this.router.navigate(['login']);

    window.stop();

  }

  /**
   *
   * @returns {any}
   */
  public getToken(): any {

    const jsonData: any = getObjectCookie('auth_token');


    if (!(typeof jsonData === 'object')) {

      eraseCookie('auth_token');
      this.router.navigate(['']);

    } else {

      return jsonData.token;

    }

  }

  /**
  *
  * @returns {Observable<any>}
  */
  public getUserAuthenticated(): Observable<any> {

    return this.http.post(`${environment.baseUrl}/api/user`, {});

  }

}