import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 import { HomeFavComponent } from './home-fav.component';
 import { SearchComponent } from './movies/search.component';
 
const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home',  component: HomeFavComponent },
   { path: 'search',     component: SearchComponent }
   
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
