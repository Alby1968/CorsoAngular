import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from '../../servizi/servizio-prova.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Routes, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ContattoComponent } from "../contatto/contatto.component";
import { HomeComponent } from '../home/home.component';
import { ElatableService } from '../../servizi/elatable.service';
import { Meta, Title } from '@angular/platform-browser';




@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.css'
})
export class ContattiComponent implements OnInit{
  persone : any;
  persona : any;
  // isProfile: boolean = false;

    // constructor(private servizioProva: ServizioProvaService, private route: ActivatedRoute){};
    // let id  = route.snapshot.paramMap.get('id');
  
    // per cambiare il titolo della pagina 
    constructor(private elatable : ElatableService, private title : Title, private meta : Meta){
      this.title.setTitle('Contatti');
      this.meta.updateTag({name: 'Description', content: 'Questa è una page Contatti'});
      this.meta.updateTag({name: 'keywords', content: 'tutorial, contatti, sito in Angular metadata'});

    }
    
    ngOnInit(): void {
      //  //  lesson 33    this.persone = this.servizioProva.getPersone();

      // let { data: Contatti, error } = await supabase
      // .from('Contatti')
      // .select('*')
    
    //  this.homecmp.onLeggiPersone().subscribe((data: any )=>{
      //let data = this.homecmp.LeggiPersone(); 
      let data = this.elatable.fetchData('Contatti'); 
      data = this.elatable.personeService;
    
      this.persone = data;
    
      console.log('ciao');
      console.log(data);
      }



      onDeletePersona(id:number){
        try {
          let data = this.elatable.deleteRecord('Contatti', id); // Sostituisci con il nome della tua tabella e l'ID del record
          console.log('Record cancellato con successo',data);
        } catch (error:any) {
          console.error("An error occurred:", error.message);
        }
       
      
       }
    
      
       onPatchPersona(id:number){  
       try {
        console.log("id"+ id)
        let data = this.elatable.updateRecord('Contatti', id); // Sostituisci con il nome della tua tabella e l'ID del record
        console.log('Record aggiornato con successo',data);
      } catch (error:any) {
        console.error("An error occurred:", error.message);
      }
     
    
    }
      
}