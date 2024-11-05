import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private loggedInKey = 'isLoggedIn';
  loggedInSubject: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    // Check if the user is already logged in based on localStorage
    const loggedIn = localStorage.getItem('user') !== null;
    this.loggedInSubject = new BehaviorSubject<boolean>(loggedIn);
  }

  validateLogin(email: string, password: string): Observable<any> {
    return this.http
      .post('https://blogbackend-beta.vercel.app/auth/login', { email, password })
      .pipe(
        map((res: any) => {
          localStorage.setItem('user', res.data.username);
          this.loggedInSubject.next(true);
          return res;
        }),
        catchError((error) => {
          // Handle error appropriately (e.g., log it, show a message)
          console.error('Login error', error);
          return of({ message: 'Login failed' });
        })
      );
  }

  validateSignup(name: string, email: string, password: string): Observable<any> {
    return this.http
      .post('https://blogbackend-beta.vercel.app/auth/signup', { username: name, email, password })
      .pipe(
        catchError((error) => {
          // Handle error appropriately
          console.error('Signup error', error);
          return of({ message: 'Signup failed' });
        })
      );
  }

  logout(): void {
    localStorage.removeItem('user');
    this.loggedInSubject.next(false);
  }

  isLoggedIn(): boolean {
    return this.loggedInSubject.value;
  }
}
  