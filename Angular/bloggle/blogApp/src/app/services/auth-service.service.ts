import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private url = 'http://localhost:5000';


  constructor(private http: HttpClient) {}

  validateLogin(email: string, password: string): Observable<any> {
    return this.http.post(`${this.url}/auth/login`, { email, password }).pipe(
      map((response: any) => {
        if (response.data) {
          localStorage.setItem('jwt', response.token)
          localStorage.setItem('user',response.data.username); 
          localStorage.setItem('isAdmin',response.data.isAdmin); 
          localStorage.setItem('isSuperAdmin',response.data.isSuperAdmin); 
          localStorage.setItem('login','true');
        }
        return response;
      })
  )}

  validateSignup(
    username: string,
    email: string,
    password: string,
    cnfPassword: string
  ): Observable<any> {
    return this.http.post(`${this.url}/auth/signup`, {
      username,
      email,
      password,
      cnfPassword,
    });
  }

  logout(): void {
    localStorage.clear();
  }
}
