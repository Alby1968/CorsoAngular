import { Injectable } from '@angular/core';
import { superbase } from './superbase.service';
import { subscribe } from 'diagnostics_channel';

@Injectable({
  providedIn: 'root'
})
export class ElatableService {

  constructor() { }
  supabase = superbase;
  personeService : any
  

  async insertRecord(table: string, record: any) {
    const { data, error } =  await this.supabase
      .from(table)
      .insert([record]);

      if (error) {
        console.error('Error inserting record:', error)
      } else {
        console.log('Record inserted successfully:', data)
      }
  }
  

  async deleteRecord(table: string, id: number) : Promise<void> {
    console.log('eliminato ' + id + '-'  + table)
    const { error } = await this.supabase
      .from(table)
      .delete()
      .eq('id', id);
      
  if (error) {
      throw new Error(`Errore nella cancellazione del record: ${error.message}`);
    }
  }
  

  async updateRecord(table: string, id: number) : Promise<void> {
    console.log('aggiornato ' + id + '-'  + table)
    const { data, error }  = await this.supabase 
   .from(table)
   .update({nome:'Sergio', colore:'Azzurro'})
   .eq('id', id)
   


  if (error) {
    throw new Error(`Errore nell'aggiornamento del record: ${error.message}`);
    }
  }


  
 fetchData(table: string) : any {
  this.supabase
    .from(table)
    .select('*') 
    .then(({ data, error }) => {
  
   console.log('Dati persona');
   console.log(data);
      if (error) {
        console.error('Errore nel recupero dei dati:', error)
        return data
      } else {
        console.log('Dati recuperati:', data)
        this.personeService = data;
        return data
        
      
      }
    });
}


async getPersona(id: number): Promise<Object> {
  console.log(id)
  const { data, error } = await this.supabase
    .from('Contatti')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw error;
  }
  
  return data;
}

 // Handle the response and errors
}


