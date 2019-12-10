import { IMovie } from './movieInterface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MovieService{

    constructor(private http: HttpClient){}


    movieUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=4c54195cedf5ef5dd215cd8df202d49b&language=en-US&page=1"; 

    getMovies(): Observable<IMovie[]>
    {
        return this.http.get<IMovie[]>(this.movieUrl)
    }
}