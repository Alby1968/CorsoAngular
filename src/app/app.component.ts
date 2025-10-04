import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContattiComponent } from "./componenti/contatti/contatti.component";
import { HomeComponent } from "./componenti/home/home.component";
import { ApplicationModule } from '@angular/core';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,ApplicationModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'corso-angular36';

  constructor(private authservice: AuthService){

  }
  ngOnInit(): void {
    if (localStorage.getItem('user')){
      const user = JSON.parse(localStorage.getItem('user')!);
      this.authservice.createUser(user.email, user.id, user._token, user._expirationDate);
    }
  }

  onLogOut(){
    this.authservice.logOut();
  }
}
