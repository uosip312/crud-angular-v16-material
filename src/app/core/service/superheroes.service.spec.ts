import { TestBed } from '@angular/core/testing';
import { SuperheroesService } from './superheroes.service';
import { Heroe } from '../interface/heroe';

describe('SuperheroesService', () => {
  let service: SuperheroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperheroesService);
  });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllSuperHeroes should return all superheroes', () => {
    const superheroes = service.getAllSuperHeroes();
    expect(superheroes.length).toBe(3);
  });

  it('getSuperHeroeById should return a superhero by id', () => {
    const superheroId = '55c4fc3c-ab30-47ae-892d-1ab059e9f1ac';
    const superhero = service.getSuperHeroeById(superheroId);
    expect(superhero?.id).toBe(superheroId);
  });

  it('getSuperHeroesByName should return superheroes by name', () => {
    const superheroes = service.getSuperHeroesByName('rman');
    expect(superheroes.length).toBe(2);
  });

  it('addSuperHeroe should add a superhero', () => {
    const newHero: Heroe = {id: '', name: 'DeadPool', description: 'Mercenario Bocazas' };
    service.addSuperHeroe(newHero);
    const superheroes = service.getAllSuperHeroes();
    expect(superheroes.length).toBe(4);
    expect(superheroes.find(hero => hero.name === newHero.name)).toBeTruthy();
  });

  it('updateSuperHeroe should update a superhero', () => {
    const updatedHero: Heroe = { id: '55c4fc3c-ab30-47ae-892d-1ab059e9f1ac', name: 'Editar Batman', description: 'Updated description' };
    service.updateSuperHeroe(updatedHero);
    const superheroes = service.getAllSuperHeroes();
    const foundHero = superheroes.find(hero => hero.id === updatedHero.id);
    expect(foundHero?.name).toBe(updatedHero.name);
  });

  it('deleteSuperHeroe should delete a superhero', () => {
    const superheroId = '55c4fc3c-ab30-47ae-892d-1ab059e9f1ac';
    service.deleteSuperHeroe(superheroId);
    const superheroes = service.getAllSuperHeroes();
    expect(superheroes.length).toBe(2);
    expect(superheroes.find(hero => hero.id === superheroId)).toBeUndefined();
  });
});
