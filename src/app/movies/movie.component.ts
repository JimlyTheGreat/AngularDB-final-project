import { Component } from '@angular/core';
import { IMovie } from './movieInterface';
import { MovieService } from './movie.service';

@Component({
    selector: 'pm-movies',
    templateUrl: "./movie.component.html"
})

export class MovieComponent
{
    pageTitle: string = "Top Movies"

    imageWidth: number = 300;
    imageMargin: number = 5;
    movies: IMovie[] = [];

    constructor(private movieService: MovieService)
    {
        
    }
    
    ngOnInit(){
        this.movieService.getMovies().subscribe(moviesObserved => {

                var moviesArray = Object.values(moviesObserved);
                this.movies = Object.values(moviesArray[0]);

        });
    }
}