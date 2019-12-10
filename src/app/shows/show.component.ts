import { Component } from '@angular/core';
import { IShow } from './showInterface';
import { ShowService } from './show.service';

@Component({
    selector: 'pm-shows',
    templateUrl: "./show.component.html"
})

export class ShowComponent
{
    pageTitle: string = "Top Shows"

    imageWidth: number = 300;
    imageMargin: number = 5;
    shows: IShow[] = [];

    constructor(private showService: ShowService)
    {
        
    }
    
    ngOnInit(){
        this.showService.getShows().subscribe(showsObserved => {
                var showsArray = Object.values(showsObserved);
                this.shows = Object.values(showsArray[3]);
        });
    }
}