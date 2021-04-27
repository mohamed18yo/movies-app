import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-detailes',
  templateUrl: './movie-detailes.component.html',
  styleUrls: ['./movie-detailes.component.css'],
})
export class MovieDetailesComponent implements OnInit ,OnDestroy{
  constructor(private moviesService: MoviesService, private route:ActivatedRoute) {}
   detailes: [];
   getDeteialSubs:Subscription
   id: any
   isLoading= true
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:ParamMap)=>{
      this.id= paramMap.get('id')
    })
    this.moviesService.getDetailesMovie(this.id)
   this.getDeteialSubs= this.moviesService.getDetaile().subscribe((res) => {
      // console.log(res);
      this.detailes = res;
      this.isLoading = false
    });
    console.log(this.id);

  }
  ngOnDestroy(){
    this.getDeteialSubs.unsubscribe()
  }
}
