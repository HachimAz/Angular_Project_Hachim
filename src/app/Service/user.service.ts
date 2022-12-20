import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private LoggedIn: boolean = false;
  constructor(private httpClient: HttpClient) {}

  login(credentiels: {
    email?: string | null | undefined;
    password?: string | null | undefined;
  }): Observable<any> {
    const headers = new HttpHeaders().set('apikey', environment.api.Key);
    return this.httpClient.post(
      environment.api.urlAuth + 'token?grant_type=password',
      credentiels,
      { headers: headers }
    );
  }

  isLoggedIn(): Observable<boolean> {
    const headers = new HttpHeaders()
      .set('apikey', environment.api.Key)
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.httpClient
      .get(environment.api.urlAuth + 'user', {
        headers: headers,
      })
      .pipe(
        map((dataUser: any) => {
          return true;
        }),
        catchError((error: any) => {
          return of(false);
        })
      );
  }

  setLogin() {
    this.LoggedIn = true;
  }

  getLogin() {
    return this.LoggedIn;
  }

  signup(credentiels: {
    email?: string | null | undefined;
    password?: string | null | undefined;
  }): Observable<any> {
    const headers = new HttpHeaders().set('apikey', environment.api.Key);
    return this.httpClient.post(
      environment.api.urlAuth + 'signup',
      credentiels,
      { headers: headers }
    );
  }

  logout() {
    localStorage.removeItem('token');
  }
}
