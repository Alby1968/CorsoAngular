import { Component, inject, NgModule, OnInit,viewChild } from '@angular/core';


import { CommonModule } from '@angular/common'; // Import CommonModule here
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { ChangeDetectionStrategy} from '@angular/core';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Meta, Title } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms'; // Import FormsModule

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Injectable } from '@angular/core';
import { superbase } from '../../servizi/superbase.service';
import { ElatableService } from '../../servizi/elatable.service';
import { EMPTY, Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,
    MatButtonModule,FormsModule,CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

constructor(private authService : AuthService, private title : Title, private meta : Meta){
  this.title.setTitle('SignUp');
  this.meta.updateTag({name: 'Description', content: 'Questa è una page signup'});
  this.meta.updateTag({name: 'keywords', content: 'tutorial, signup, sito in Angular metadata'});
}

onSubmit(form: NgForm){
    
    const email =  form.value.email;
    const password = form.value.password;
    //nsole(email, password);
    form.reset();

    this.authService.signUp(email, password, true);
    //.subscribe(data=>{console.log(data)})

  
    
  }
  
}
