import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { MoviesService } from '../movies-search/movies.service';

@Component({
  selector: 'app-movie-detailes',
  templateUrl: './movie-detailes.component.html',
  styleUrls: ['./movie-detailes.component.css'],
})
export class MovieDetailesComponent implements OnInit {
  constructor(private moviesService: MoviesService, private route:ActivatedRoute) {}
   detailes: [];
   id: any
   isLoading= true
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:ParamMap)=>{
      this.id= paramMap.get('id')
    })
    this.moviesService.getDetailesMovie(this.id)
    this.moviesService.getDetaile().subscribe((res) => {
      // console.log(res);
      this.detailes = res;
      this.isLoading = false
    });
    console.log(this.id);

  }
}
