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
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Injectable } from '@angular/core';
import { superbase } from '../../servizi/superbase.service';
import { ElatableService } from '../../servizi/elatable.service';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',


  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,
    MatButtonModule,FormsModule,ReactiveFormsModule,CommonModule],

  //changeDetection: ChangeDetectionStrategy.OnPush,
})
 @Injectable({
   providedIn: 'root'
 })
export class HomeComponent implements OnInit {
   
  homeform:  FormGroup;

  supabase = superbase;


// per cambiare il titolo della pagina 
 constructor(private elatable : ElatableService, private title : Title, private meta : Meta){
  this.title.setTitle('HomePage');
  this.meta.updateTag({name: 'Description', content: 'Questa è una page homepage'});
  this.meta.updateTag({name: 'keywords', content: 'tutorial, homepage, sito in Angular metadata'});
 }

   ngOnInit():void{
    this.homeform = new FormGroup({
      nome: new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      colore: new FormControl(null)
    })

    

  }
   onSubmit() : any{
    const newRecord = {
      nome: this.homeform.value.nome,
      email: this.homeform.value.email, 
      colore: this.homeform.value.colore
    };

    try {
      if (this.homeform.value.nome != null || this.homeform.value.nome != EMPTY){
     let data = this.elatable.insertRecord('Contatti', newRecord);
     console.log('Record inserito con successo:', data);
      }
      
    } catch (error) {
      console.error('Errore durante l\'inserimento del record:', error);
    }
  }
  
  
  //  onDeletePersona(){
  //   try {
  //     let data = this.elatable.deleteRecord('Contatti', 46); // Sostituisci con il nome della tua tabella e l'ID del record
  //     console.log('Record cancellato con successo',data);
  //   } catch (error:any) {
  //     console.error("An error occurred:", error.message);
  //   }
   
  
  //  }

  
  //  onPatchPersona(){   try {
  //   let data = this.elatable.updateRecord('Contatti', 46); // Sostituisci con il nome della tua tabella e l'ID del record
  //   console.log('Record aggiornato con successo',data);
  // } catch (error:any) {
  //   console.error("An error occurred:", error.message);
  // }
 //}
  
LeggiPersone(){
  let data: any
  try {
    //let data = this.elatable.leggiTabella('Contatti'); // Sostituisci con il nome della tua tabella 
    data = this.elatable.fetchData('Contatti'); // Sostituisci con il nome della tua tabella
    data = this.elatable.personeService;
    console.log('Record letti con successo');
    console.log(data);
  
  } catch (error:any) {
    console.error("An error occurred:", error.message);
  }
 

 }
  

  
 
 

  
  

}