import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { MOVIES} from '../mock-movies';
import {ActivatedRoute } from '@angular/router';
import {Location } from '@angular/common';
import {MovieService} from '../movie.service';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {Genre } from '../genre';



@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;

  selectedGen: string;
  genSelected: number;

 genre: Genre[];


  constructor(private route: ActivatedRoute, private location: Location, private movieService: MovieService) { }

//   public gen = ['Action', 'Crime', 'Adventure', 'Fantasy', 'Romance'];
//   public selected;

//   selectedOption(selected) {
//     this.movieService.getSelectedGen();

// }
  ngOnInit(): void {
    this.getMovie();
    this.genre = [
                  {id: 1, name: 'Action'},
                  {id: 2, name: 'Crime'},
                  {id: 3, name: 'Romance'},
                  {id: 4, name: 'Comedy'},
                  {id: 5, name: 'Fantasy'}];

                  // this.genSelected = 4;
    }

  selectedGenre(val: any) {
     const id = +this.route.snapshot.paramMap.get('id');
     this.movieService.customSelect(id)
     .subscribe(mgenre =>  mgenre);
   this.customSelect(val);
  }

  customSelect(val: any) {
      this.selectedGen = ' Genre ' + val +  ' is selected ';
  }


  getMovie(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.movieService.getMovie(id)
  .subscribe(movie => this.movie = movie );
  }


  goBack(): void {
      this.location.back();
  }


  save(): void {
      // tslint:disable-next-line:no-debugger
      debugger;
      this.movieService.updateMovie(this.movie)
      .subscribe( () => this.goBack());
    }
}
