import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  username: string = '';
  password: string = '';
  authError: string = '';

  login() {
    if(this.username == '' || this.password == '') {
      this.authError = "All values are required";
    }else {
      this.authService.login(this.username, this.password).subscribe(
        (response) => {
          localStorage.setItem('token', response.accessToken);
          this.router.navigate(['/url-shortener'])
        },
        (error) => {
          this.authError = error?.error?.message;
        }
      );
    }
    
  }

}
