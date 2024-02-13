import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Heroe } from 'src/app/core/interface/heroe';
import { SuperheroesService } from 'src/app/core/service/superheroes.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteHeroeDialogComponent } from '../delete-heroe-dialog/delete-heroe-dialog.component';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes: Heroe[] = [];
  dataSource!: MatTableDataSource<Heroe>;
  displayedColumns: string[] = ['id', 'name', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private superHeroesSvc: SuperheroesService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getHeroes() {
    this.heroes = this.superHeroesSvc.getAllSuperHeroes();
    this.dataSource = new MatTableDataSource(this.heroes);
  }

  aplicarFiltro(event: Event) {
    const valorFiltro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorFiltro.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  eliminarHeroe(hero: Heroe) {
    this.dialog.open(DeleteHeroeDialogComponent, {
      data: hero
    }).afterClosed().subscribe((confirmado: Boolean) => {
      if(confirmado) {
        this.superHeroesSvc.deleteSuperHeroe(hero.id);
        this.getHeroes();
      }
    });
  }

  formMode(mode: string) {
    this.superHeroesSvc.setFormMode(mode);
  }
}
