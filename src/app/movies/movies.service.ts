import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiUrl
export interface movie {
  Title: string;
  Year: string;
  imdbID: string;
  type: string;
  poster: string;
}
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  searchResult = new Subject<movie>();
  movies: movie[];
  detailes= new Subject<any>()
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  searchFetch(name: any) {
    return this.http
      .get<{ Search: movie }>(
        BACKEND_URL + `?s=${name}` + '&apikey=5e23775'
      )
      .subscribe((res) => {
        // console.log(res.Search);
        this.searchResult.next(res.Search);
      });
  }
  getResultSearch() {
    return this.searchResult.asObservable();
  }
  getDetaile() {
    return this.detailes.asObservable();
  }

  getDetailesMovie(id: string) {
    this.http.get(BACKEND_URL + `?i=${id}` + '&apikey=5e23775').subscribe((res)=>{
      // console.log(res);
      this.detailes.next([res])
    })
  }
}
