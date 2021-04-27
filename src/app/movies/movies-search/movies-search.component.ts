import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/movies/movies-search/movies.service';
@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.css'],
})
export class MoviesSearchComponent implements OnInit {
  constructor(private moviesService: MoviesService, private router:Router, private route: ActivatedRoute) {}
  private searchResult:any
  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    console.log(form.value.word);
    this.moviesService.searchFetch(form.value.word)
    this.router.navigate(['list'], { relativeTo: this.route });
  }
}
