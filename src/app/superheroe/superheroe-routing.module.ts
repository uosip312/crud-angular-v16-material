import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperheroeComponent } from './superheroe.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

const routes: Routes = [
  { 
    path: '',
    component: SuperheroeComponent,
    children: [
      {
        path: '',
        component: HeroesListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperheroeRoutingModule { }
