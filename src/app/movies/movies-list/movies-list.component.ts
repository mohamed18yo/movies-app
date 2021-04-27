import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { movie, MoviesService } from '../movies-search/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit ,OnDestroy{
  movies: movie;
  isLoading= false
  resultSearchSubs:Subscription
  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isLoading= true
   this.resultSearchSubs= this.moviesService.getResultSearch().subscribe((res) => {

      this.movies = res;
      // console.log(this.movies);
      this.isLoading= false
    });
  }
  onDetaile(id: string) {
    // this.moviesService.getDetailesMovie(id);
    // this.router.navigate(['../detail'], { relativeTo: this.route });
  }
  ngOnDestroy(){
    this.resultSearchSubs.unsubscribe()
  }
}
