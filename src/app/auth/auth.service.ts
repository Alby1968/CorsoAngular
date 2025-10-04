import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { superbase } from '../servizi/superbase.service';
import { User } from '../modelli/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedin: boolean = false;   //con false non vedo con true vedo i contatti
  isAdmin: boolean = true;  
  expirationDate: Date

   constructor(private route: Router) {}
  
   supabase = superbase;
   user : User | null

  isAuthenticated() : boolean|null{
    return this.isLoggedin;
  }

  isInRoleAdmin() : boolean|null{
    return this.isAdmin;
  }


  //signUp Registrazione
  async signUp( email: string, password: string, returnSecureToken:boolean) {
    console.log(email, password, returnSecureToken);
    try{
    const { data, error } = await this.supabase.auth.signUp({
      email: email,
      password: password,
      
      options: {
        data: {
          first_name: 'John',
          age: 27,
        }
  
      //  redirectTo: 'https://example.com/welcome'
      }
      
    })
  }
  catch(ex){
    console.log(ex);
  }
    
  }
  

   //signIn  Login
   async signIn( email: string, password: string) {
    console.log(email, password);
    try{
    //  const { data, error } = await this.supabase.auth.signInWithPassword({
    
     const response = await this.supabase.auth.signInWithPassword({

       email: email,
      password: password,
    })
    

    if (!response.error) console.error('Error');
    else console.log('User:', response.data.user)
    
    this.expirationDate = new Date(new Date().getTime() + (response.data.session?.expires_in! * 1000));
    this.createUser(response.data.user?.email, response.data.user?.id, response.data.session?.access_token, this.expirationDate);
   }
  catch(ex){
    console.log(ex);
  };
    // Handle the response and errors
  }
 
   // creazione dell'utente con i dati del sign-in (login)
    createUser(email:string|undefined, id:string|undefined, token:string|undefined, _expirationDate:Date|undefined){
        this.user = new User(email,id,token,_expirationDate);
        this.isLoggedin = true;  // con true vedo i contatti altrimenti no
      
        localStorage.setItem('user', JSON.stringify(this.user));
        console.log(this.user);
        
  }


  // LogOut

  logOut(){
    this.isLoggedin = false;  // con false non vedo i contatti altrimenti si
    this.user = null;
    localStorage.removeItem('user');

    this.route.navigate(['/signin']);

  }

}
