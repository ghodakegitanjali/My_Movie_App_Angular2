"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var movie_1 = require("../movie");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var movie_service_1 = require("../movie.service");
var MovieDetailComponent = /** @class */ (function () {
    function MovieDetailComponent(route, location, movieService) {
        this.route = route;
        this.location = location;
        this.movieService = movieService;
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
        this.getMovie();
    };
    MovieDetailComponent.prototype.getMovie = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.movieService.getMovie(id)
            .subscribe(function (movie) { return _this.movie = movie; });
    };
    MovieDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", movie_1.Movie)
    ], MovieDetailComponent.prototype, "movie", void 0);
    MovieDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-detail',
            templateUrl: './movie-detail.component.html',
            styleUrls: ['./movie-detail.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, common_1.Location, movie_service_1.MovieService])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());
exports.MovieDetailComponent = MovieDetailComponent;
//# sourceMappingURL=movie-detail.component.js.map