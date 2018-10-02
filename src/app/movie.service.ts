import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { MOVIES } from './mock-movies';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {tap} from 'rxjs/operators';
import { Genre } from './genre';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {



  private movieUrl = 'api/movies';

// public gen = ['Action', 'Crime', 'Fantasy'];
// getSelectedGen(): Observable<Movie> {
//   return this.http.get<Movie>(MovieService.name);
// }



  getMovies(): Observable<Movie[]> {

    return this.http.get<Movie[]>(this.movieUrl)
    .pipe(
      tap (movies => (`fetched movies`)));
  }
customSelect(id: number): Observable<Genre> {
  const val = `${this.customSelect}/${id}`;
  return this.http.get <Genre> (val);
}

 getMovie(id: number): Observable<Movie> {
   const url = `${this.movieUrl}/${id}`;
   return this.http.get < Movie > (url) ;
 }


 updateMovie(movie: Movie): Observable<any> {
   return this.http.put(this.movieUrl, movie, httpOptions);
 }


 addMovie ( movie: Movie): Observable<Movie> {
   return this.http.post<Movie>(this.movieUrl, movie , httpOptions);
 }


 deleteMovie (movie: Movie | number): Observable<Movie> {
  const id = typeof movie === 'number' ? movie : movie.id;
  const url = `${this.movieUrl}/${id}`;
  return this.http.delete<Movie>(url , httpOptions);
  }




 // Injecting http
  constructor(private http: HttpClient) {}


}
