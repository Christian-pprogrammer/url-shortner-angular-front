import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://irembo-test-project.ue.r.appspot.com';

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(`${this.baseUrl}/api/user/login`, body);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/'])
  }
}
