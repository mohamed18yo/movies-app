import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { movie, MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit, OnDestroy {
  movies: movie;
  isLoading = false;
  resultSearchSubs: Subscription;
  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
errorMsg=""
  ngOnInit(): void {
    this.isLoading = true;

    this.resultSearchSubs = this.moviesService
      .getResultSearch()
      .subscribe((res) => {
        if(!res){
          this.errorMsg=" No Result"
          this.isLoading= false
        }else{
          this.movies = res;
          this.isLoading = false;
          this.errorMsg=""
        }


      });
  }

  ngOnDestroy() {
    this.resultSearchSubs.unsubscribe();
  }
}
