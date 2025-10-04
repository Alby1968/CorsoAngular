import { Component, inject, NgModule, OnInit,viewChild } from '@angular/core';


import { CommonModule } from '@angular/common'; // Import CommonModule here
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { ChangeDetectionStrategy} from '@angular/core';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule, Meta, Title } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms'; // Import FormsModule
import { AnyARecord } from 'dns';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Injectable } from '@angular/core';
import { superbase } from '../../servizi/superbase.service';
import { ElatableService } from '../../servizi/elatable.service';
import { EMPTY, Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,
    MatButtonModule,FormsModule,CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  
  // per cambiare il titolo della pagina 
  constructor(private authService : AuthService, private title : Title, private meta : Meta){
    this.title.setTitle('Signin');
    this.meta.updateTag({name: 'Description', content: 'Questa è una page sognin'});
    this.meta.updateTag({name: 'keywords', content: 'tutorial, signin, sito in Angular metadata'});
  }

  onSubmit(form: NgForm){
    
    const email =  form.value.email;
    const password = form.value.password;
    //nsole(email, password);
    form.reset();

    this.authService.signIn(email, password);
    

}
}