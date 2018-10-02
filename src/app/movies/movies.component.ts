import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MOVIES } from '../mock-movies';
import {MovieService } from '../movie.service';
import { Observable, of } from 'rxjs';
import { Genre } from '../genre';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  genre: Genre[];
  movies: Movie[];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies()
    .subscribe(movies => this.movies = movies);
  }



 add(name: string): void {
   name = name.trim();
   if (!name) {
     return;
    }
   this.movieService.addMovie( { name} as Movie)
   .subscribe(movie => {this.movies.push(movie); } );
 }

delete(movie: Movie): void {
    this.movies = this.movies.filter(m => m !== movie);
    this.movieService.deleteMovie(movie).subscribe();
}

}
