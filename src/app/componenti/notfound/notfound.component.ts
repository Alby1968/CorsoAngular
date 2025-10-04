import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {

  // per cambiare il titolo della pagina 
      constructor(private title : Title, private meta : Meta){
        this.title.setTitle('404 - Pagina non trovata');
        this.meta.updateTag({name: 'Description', content: 'Questa è una page che non esitst'});
        this.meta.updateTag({name: 'keywords', content: 'tutorial, contatti, sito in Angular metadata, errore 404'});
  
      }
      
}
