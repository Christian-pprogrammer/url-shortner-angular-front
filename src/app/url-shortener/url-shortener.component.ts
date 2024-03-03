import { Component, OnInit } from '@angular/core';
import { UrlShortenerService } from '../url-shortener.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environment';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.scss']
})
export class UrlShortenerComponent implements OnInit {

  constructor(private urlShortenerService: UrlShortenerService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem("token")) {
      this.router.navigate(['/login'])
    }
  }
  originalUrl: string = '';
  shortenedUrl: string = '';
  backendUrl: string = `${environment.backend_url}/api/url`;
  btnText: string = 'copy';
  urlError: string = '';
  customUrl: string = '';
  showCustomUrl: boolean = false;
  successMessage: string = '';

  shortenUrl() {
    this.btnText = 'copy';
    this.urlError = '';
    this.successMessage = '';
    if (this.originalUrl != '') {
      let userCustomUrl = '';
      if (this.showCustomUrl && this.customUrl != '') {
        userCustomUrl = this.customUrl;
      }
      this.urlShortenerService.shortenUrl(this.originalUrl, userCustomUrl).subscribe(
        (response) => {
          this.shortenedUrl = `${this.backendUrl}/${response.url}`;
          this.originalUrl = '';
          this.successMessage = 'Url shortened successfully';
        },
        (error) => {
          this.urlError = error?.error?.message;
        }
      );
    } else {
      this.urlError = "Enter original url"
    }

  }

  logout() {
    this.authService.logout();
  }

  copyUrl() {
    if (this.shortenedUrl != '') {
      navigator.clipboard.writeText(this.shortenedUrl);
      this.successMessage = "url copied"
    }
  }
  displayCustomUrl() {
    console.log("clicked...")
    console.log(this.showCustomUrl)
    if (this.showCustomUrl == true) {
      this.showCustomUrl = false;
    } else {
      this.showCustomUrl = true;
    }
  }
}
