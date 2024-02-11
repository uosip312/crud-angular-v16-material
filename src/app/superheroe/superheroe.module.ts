import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperheroeRoutingModule } from './superheroe-routing.module';
import { SuperheroeComponent } from './superheroe.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { AngularMaterialModule } from '../ngMaterial/angular-material.module';


@NgModule({
  declarations: [
    SuperheroeComponent,
    HeroesListComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SuperheroeRoutingModule
  ]
})
export class SuperheroeModule { }
