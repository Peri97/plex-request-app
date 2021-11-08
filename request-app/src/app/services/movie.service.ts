import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Movie } from '../movie.model';

@Injectable()
export class MovieService {

  private readonly API_KEY = `put api key in here`;

  constructor(private http: HttpClient) { }

  //Searches for Movies and Shows
  searchMovie(searchQuery: string): Observable<Array<Movie>> {
    return this.http.get(`https://api.themoviedb.org/3/search/multi?api_key=${this.API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`)
      .pipe(
        map((response: any) => response.Search)
      );
  }
/*
  getMovieDetails(imdbId: string): Observable<MovieDetail> {
    return this.http.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&i=${imdbId}&plot=full`);
  }
*/
}
// https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false