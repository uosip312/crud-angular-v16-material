import { Injectable } from '@angular/core';
import { Heroe } from '../interface/heroe';
import { v4 as uuidv4 } from 'uuid';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperheroesService {

  private superHeroes: Heroe[] = [
    { id: '6f7145f6-6021-4e17-a60a-5cfc8a7be1ab', name: 'Superman', description: 'El Hombre de Acero' },
    { id: '55c4fc3c-ab30-47ae-892d-1ab059e9f1ac', name: 'Batman', description: 'El Caballero de la Noche' },
    { id: 'bc7e5e8f-769c-4b28-83bf-c6439a2e3a5c', name: 'Spiderman', description: 'El Hombre Araña' },
  ];

  private formMode$ = new BehaviorSubject<string>('');

  constructor() { }

  getAllSuperHeroes(): Heroe[] {
    return this.superHeroes;
  }

  getSuperHeroeById(id: string): Heroe | undefined {
    return this.superHeroes.find(heroe => heroe.id === id);
  }

  getSuperHeroesByName(name: string): Heroe[] {
    return this.superHeroes.filter( hero => hero.name.toLowerCase().includes( name.toLowerCase() ) );
  }

  addSuperHeroe(heroe: Heroe): void {
    heroe.id = uuidv4();
    this.superHeroes.push(heroe);
  }

  updateSuperHeroe(heroe: Heroe): void {
    const index = this.superHeroes.findIndex( h => h.id === heroe.id);
    if( index !== -1 ) {
      this.superHeroes[index] = heroe;
    }
  }

  deleteSuperHeroe(id: string): void {
    const index = this.superHeroes.findIndex( h => h.id === id);
    if( index !== -1 ) {
      this.superHeroes.splice(index, 1);
    }
  }

  getFormMode(): Observable<string> {
    return this.formMode$.asObservable();
  }

  setFormMode(mode: string): void {
    this.formMode$.next(mode);
  }
 
}
