import { Component, OnInit,  Input } from '@angular/core';
import { ServizioProvaService } from '../../servizi/servizio-prova.service';
import { ActivatedRoute, Router, NavigationEnd, Params, ParamMap } from '@angular/router';
import { ElatableService } from '../../servizi/elatable.service';
import { Persona } from '../../modelli/persona.model';



@Component({
  selector: 'app-contatto',
  standalone: true,
  imports: [],
  templateUrl: './contatto.component.html',
  styleUrl: './contatto.component.css'
})
export class ContattoComponent implements OnInit {
  //test    persona = {nome:'Luca', cognome:'Rossi', color:'red'};
  // @Input() persona : any;
  //persona : Persona;
  persona : any;
  id: number=0;
  
  // constructor(private route: ActivatedRoute, private servizioProva: ServizioProvaService, private elatable:ElatableService ){};
  constructor(private route: ActivatedRoute, private elatable:ElatableService ){};
  
  async ngOnInit(): Promise<void> {
     
    // // this.id = parseInt(this.route.snapshot.paramMap.get('id')!
    // // this.id = +this.route.snapshot.paramMap.get('id')!
     this.route.paramMap.subscribe(async (params: ParamMap)=>{
      this.id = +params.get('id')!;
     // this.persona = this.servizioProva.getPersona(this.id);
       console.log('key'+ this.id)
      this.persona = await this.elatable.getPersona(this.id);
          
         
      console.log(this.persona)
     });


  
    }
    
     
  }





