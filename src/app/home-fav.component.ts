import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MovieService } from './movies/movies.service';

import { Movie, SelectItem, Music } from './interfaces';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
// import { Hero } from './hero';
// import { HeroService } from './hero.service';

@Component({
    selector: 'app-home',
    templateUrl: './home-fav.component.html',
    styleUrls: [],
    providers: [MovieService]
})

export class HomeFavComponent implements OnInit {
    title = 'My Dashboard';
    movies: Movie[] = [];
    musics: Music[] = [];
    langauges: SelectItem[];

    selectedlangauge: any;


    constructor(
        private movieSerivce: MovieService,
        public toastr: ToastsManager,
        vcr: ViewContainerRef
    ) {
        this.toastr.setRootViewContainerRef(vcr);
        this.langauges = [];
        this.langauges.push({label: 'Any', value: {id: 1, name: 'Any', code: ''}});
        this.langauges.push({label: 'English', value: {id: 2, name: 'English', code: 'en'}});
        this.langauges.push({label: 'Hindi', value: {id: 3, name: 'Hindi', code: 'hi'}});
        this.langauges.push({label: 'Tamil', value: {id: 4, name: 'Tamil', code: 'ta'}});
        this.langauges.push({label: 'Malayalam', value: {id: 5, name: 'Malayalam', code: 'ml'}});
    }

    addRemoveFav(fav) {
        if (this.movieSerivce.toggleFav(fav)) {
            this.showInfo('Added to favourites');
        }else {
            this.showWarning('Removed from favourites');
        }
    }
    

    isFav(id: number): string {
        return this.movieSerivce.isFavMovie(id);
    }
    
    orderBy(srtval: string, order: string): void {
        this.movies = this.movieSerivce.orderByService(srtval, order);
    }
    filterBy(srtval: any): void {
        this.movies = this.movieSerivce.filterByService(srtval.code);
    }
    showInfo(msg: string) {
        this.toastr.info(msg, null, { positionClass: 'toast-bottom-right', animate: 'flyRight' });
    }

    showWarning(msg: string) {
        this.toastr.warning(msg, null, { positionClass: 'toast-bottom-right', animate: 'flyRight' });
    }
    msToTime(duration) {
        let milliseconds: any;
        let seconds: any;
        let minutes: any;
        let hours: any;
        milliseconds = ((duration % 1000) / 100).toFixed(0);
        seconds = ((duration / 1000) % 60).toFixed(0);
        minutes = ((duration / (1000 * 60)) % 60).toFixed(0);
        hours = ((duration / (1000 * 60 * 60)) % 24).toFixed(0);

        hours = (hours < 10) ? '0' + hours : hours;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        return  minutes + ':' + seconds;
    }
    ngOnInit(): void {
        this.movies = this.movieSerivce.getPosts();
        
    }
}



