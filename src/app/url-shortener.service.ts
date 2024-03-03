import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {

  private baseUrl = environment.backend_url;

  constructor(private http: HttpClient) { }

  shortenUrl(originalUrl: string, customUrl: string): Observable<any> {
    let token: string | null = '';
    if (localStorage.getItem("token")) {
      token = localStorage.getItem("token");
    }
    console.log(token);
    console.log(`Bearer ${token}`)
    return this.http.post(`${this.baseUrl}/api/url/shorten?customUrl=${customUrl}`, originalUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

}
