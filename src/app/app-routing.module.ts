import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { MovieDetailesComponent } from './movies/movie-detailes/movie-detailes.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MoviesSearchComponent } from './movies/movies-search/movies-search.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'movies',
    component: MoviesSearchComponent, canActivate:[AuthGuard] ,
    children: [
      { path: 'list', component: MoviesListComponent },
      { path: 'detail/:id', component: MovieDetailesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
