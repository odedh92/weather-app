import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeWeatherComponent } from 'src/home/feature/home-weather/home-weather.component';
import { FavoritesComponent } from 'src/favorites/favorites/favorites.component';

const routes: Routes = [
  { path: '', component: HomeWeatherComponent },
  { path: 'home', component: HomeWeatherComponent },
  { path: 'favorites', component: FavoritesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
