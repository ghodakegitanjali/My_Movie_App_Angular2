import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import { MovieService} from '../movie.service';
import {MovieDetailComponent} from '../movie-detail/movie-detail.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {

    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies()
    .subscribe( movies => this.movies = movies.slice(1 , 6)) ;
  }

}
