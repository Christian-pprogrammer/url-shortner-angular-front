import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'url-shortener', component: UrlShortenerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
