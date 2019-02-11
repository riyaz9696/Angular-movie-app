import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavmoviesComponent } from './component/favmovies/favmovies.component';

import { MoviesComponent } from './component/shared/movies/movies.component';


const routes: Routes = [

  { path: 'favmovies', component: FavmoviesComponent },
  { path: 'searchMovies', component:MoviesComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FavmoviesComponent ,MoviesComponent]






 