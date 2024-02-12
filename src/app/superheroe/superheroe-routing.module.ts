import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperheroeComponent } from './superheroe.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroeFormComponent } from './heroe-form/heroe-form.component';

const routes: Routes = [
  { 
    path: '',
    component: SuperheroeComponent,
    children: [
      { path: '', component: HeroesListComponent },
      { path: 'agregar', component: HeroeFormComponent },
      { path: 'editar/:id', component: HeroeFormComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperheroeRoutingModule { }
