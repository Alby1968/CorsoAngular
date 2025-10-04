import { Routes, RouterLink } from '@angular/router';
import { HomeComponent } from "./componenti/home/home.component";
import { ContattiComponent } from "./componenti/contatti/contatti.component";
import { ContattoComponent } from "./componenti/contatto/contatto.component";
import { NotfoundComponent } from './componenti/notfound/notfound.component';

import { authGuard, CanActivateChild} from './auth/auth.guard';
import { Component } from '@angular/core';
import { SignUpComponent } from './componenti/sign-up/sign-up.component';
import { SignInComponent } from './componenti/sign-in/sign-in.component';



export const routes: Routes = [
    {path:'',pathMatch:'full', redirectTo:'/homepage'},     // lesson 26
    {path:'homepage', component: HomeComponent},            // lesson 26
    {path:'signup', component: SignUpComponent},
    {path:'signin', component: SignInComponent},
    {path:'contatti', component: ContattiComponent,
        canActivate:[authGuard],canActivateChild:[authGuard],
        children:[
        {path:':id', component: ContattoComponent}
     
    ]},
    // {path:'contatti/:id', component: ContattiComponent}
    {path:'404', component: NotfoundComponent},   // lesson 26 Gestione degli errori nel path
    {path: '**', redirectTo:'/404'}  // se non incluso nei path superiori mando al path 404
];
