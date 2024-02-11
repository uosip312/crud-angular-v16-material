import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'superheroes',
    pathMatch: 'full'
  },
  { 
    path: 'superheroes', 
    loadChildren: () => import('./superheroe/superheroe.module').then(m => m.SuperheroeModule)
  },
  {
    path: '**',
    redirectTo: 'superheroes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true} ) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
