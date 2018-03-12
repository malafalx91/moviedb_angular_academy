import { Component, OnDestroy } from '@angular/core';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'Movie DB';
  private LOGO = '../assets/logo.png';
  private sub: Subscription;

  constructor(activeRoute: ActivatedRoute) {
    this.sub = activeRoute.fragment.pipe(filter(f => !!f)).subscribe(f => document.getElementById(f).scrollIntoView({behavior: 'smooth'}));
  }

  public ngOnDestroy(): void {
    if(this.sub) this.sub.unsubscribe();
  }
  
}










