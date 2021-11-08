import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { 
  debounceTime, 
  distinctUntilChanged, 
  tap, 
  switchMap 
} from 'rxjs/operators';

import { Movie } from '../movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  query!: string;
  movies$!: Observable<Array<Movie>>;


  constructor(private readonly movieService: MovieService) { }

  getSearchResults() {
    this.movies$ = this.movieService.searchMovie(this.query);
  }

  ngOnInit(): void {

  }

}
