import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from 'src/home/data-access/weather.service';
import { LocalStorageService } from 'src/shared/data-access/local-storage.service';
import { TodayForecast } from 'src/shared/model/forecast.model';
import { WeatherCityModel } from 'src/shared/model/weather-city.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favoriteCurrentWeather : TodayForecast[]

  
  constructor(public localStore:LocalStorageService,
     public weatherService : WeatherService,
     private router:Router) {
     this.favoriteCurrentWeather = []
     this.populateFavoritesWithCurrentWeather()
    
  }

  ngOnInit(): void {
    
  }

  viewcityweather(favorite:WeatherCityModel) {
      this.router.navigate(['/home'], { state: favorite })
  }

  removeFavorite(favorite:WeatherCityModel,i:number) {
      this.localStore.toggleFavorites(favorite)
      this.favoriteCurrentWeather.splice(i, 1)
  }

  populateFavoritesWithCurrentWeather() {

    Promise.all(this.localStore.getFavorites().map(city => {
      return new Promise( (resolve,reject) =>  {
          return resolve(this.weatherService.getDailyForecast(city.Key))
      })
      })).then((results:any[]) => {
        this.favoriteCurrentWeather = results.map(r=>r.data[0]);
    })
  }




}
