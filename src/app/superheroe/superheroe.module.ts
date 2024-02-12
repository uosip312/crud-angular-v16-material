import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperheroeRoutingModule } from './superheroe-routing.module';
import { SuperheroeComponent } from './superheroe.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { AngularMaterialModule } from '../ngMaterial/angular-material.module';
import { HeroeFormComponent } from './heroe-form/heroe-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteHeroeDialogComponent } from './delete-heroe-dialog/delete-heroe-dialog.component';


@NgModule({
  declarations: [
    SuperheroeComponent,
    HeroesListComponent,
    HeroeFormComponent,
    DeleteHeroeDialogComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    SuperheroeRoutingModule
  ]
})
export class SuperheroeModule { }
