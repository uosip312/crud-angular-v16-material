import { Injectable } from '@angular/core';
import { Heroe } from '../interface/heroe';

@Injectable({
  providedIn: 'root'
})
export class SuperheroesService {

  private superHeroes: Heroe[] = [
    { id: 1, name: 'Superman', description: 'El Hombre de Acero' },
    { id: 2, name: 'Batman', description: 'El Caballero de la Noche' },
    { id: 3, name: 'Spiderman', description: 'El Hombre Araña' },
  ];

  constructor() { }

  getAllSuperHeroes(): Heroe[] {
    return this.superHeroes;
  }

  getSuperHeroeById(id: number): Heroe | undefined {
    return this.superHeroes.find(heroe => heroe.id === id);
  }

  getSuperHeroesByName(name: string): Heroe[] {
    return this.superHeroes.filter( hero => hero.name.toLowerCase().includes( name.toLowerCase() ) );
  }

  addSuperHeroe(heroe: Heroe): void {
    this.superHeroes.push(heroe);
  }

  updateSuperHeroe(heroe: Heroe): void {
    const index = this.superHeroes.findIndex( h => h.id === heroe.id);
    if( index !== -1 ) {
      this.superHeroes[index] = heroe;
    }
  }

  deleteSuperHeroe(id: number): void {
    const index = this.superHeroes.findIndex( h => h.id === id);
    if( index !== -1 ) {
      this.superHeroes.splice(index, 1);
    }
  }
 
}
