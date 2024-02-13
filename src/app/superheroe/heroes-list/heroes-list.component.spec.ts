import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesListComponent } from './heroes-list.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SuperheroesService } from 'src/app/core/service/superheroes.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/app/ngMaterial/angular-material.module';
import { Heroe } from 'src/app/core/interface/heroe';
import { of } from 'rxjs';
import { DeleteHeroeDialogComponent } from '../delete-heroe-dialog/delete-heroe-dialog.component';

describe('HeroesListComponent', () => {
  let component: HeroesListComponent;
  let fixture: ComponentFixture<HeroesListComponent>;
  let superheroesService: jasmine.SpyObj<SuperheroesService>;
  let matDialog: jasmine.SpyObj<MatDialog>;

  beforeEach(() => {
    superheroesService = jasmine.createSpyObj('SuperheroesService', ['getAllSuperHeroes', 'deleteSuperHeroe']);
    matDialog = jasmine.createSpyObj('MatDialog', ['open']);

    TestBed.configureTestingModule({
      declarations: [HeroesListComponent],
      imports: [
        AngularMaterialModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: SuperheroesService, useValue: superheroesService },
        { provide: MatDialog, useValue: matDialog },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('HeroesListComponent should create', () => {
    expect(component).toBeTruthy();
  });

  it('aplicarFiltro should apply filter', () => {
    const heroes = [
      { id: '1', name: 'Hero1', description: 'Description1' },
      { id: '2', name: 'Hero2', description: 'Description2' },
    ];
    superheroesService.getAllSuperHeroes.and.returnValue(heroes);
    fixture.detectChanges();

    component.aplicarFiltro({ target: { value: 'Hero1' } } as any);

    expect(component.dataSource.filter).toBe('hero1');
  });

});
