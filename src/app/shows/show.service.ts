import { IShow } from './showInterface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ShowService{

    constructor(private http: HttpClient){}


    showUrl = "https://api.themoviedb.org/3/tv/popular?api_key=4c54195cedf5ef5dd215cd8df202d49b&language=en-US&page=1"; 

    getShows(): Observable<IShow[]>
    {
        return this.http.get<IShow[]>(this.showUrl)
    }
}