import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioProvaService {

  constructor() { }

  persone = [        //  lesson 22 passare il servizio i omponein tutti i componenti con root
    {nome:'Luca', cognome:'Rossi',isOnLine:true,color:'blue'},
    {nome:'Marco',cognome:'Verdi',isOnLine:false,color:'red'},
    {nome:'Anna', cognome:'Neri',isOnLine:true,color:'green'},
    {nome:'Franco', cognome:'Gialli',isOnLine:false,color:'orange'},
    {nome:'Sergio', cognome:'Grigi',isOnLine:true,color:'black'}
  ];
  
  getPersone(){
    return this.persone;
  }

  getPersona(index: number){
    return this.persone[index];
  }
}
