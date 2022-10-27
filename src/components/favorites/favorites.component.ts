import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from 'src/components/home/data-access/weather.service';
import { LocalStorageService } from 'src/components/shared/data-access/local-storage.service';
import { TodayForecast } from 'src/components/shared/model/forecast.model';
import { WeatherCityModel } from 'src/components/shared/model/weather-city.model';

@Component({
	selector: 'app-favorites',
	templateUrl: './favorites.component.html',
	styleUrls: [ './favorites.component.css' ]
})
export class FavoritesComponent implements OnInit {
	favoriteCurrentWeather: TodayForecast[];

	constructor(public localStore: LocalStorageService, public weatherService: WeatherService, private router: Router) {
		this.favoriteCurrentWeather = [];
		this.populateFavoritesWithCurrentWeather();
	}

	ngOnInit(): void {
		console.log(this.localStore.getFavorites());
	}

	viewcityweather(favorite: WeatherCityModel) {
		this.router.navigate([ '/home' ], { state: favorite });
	}

	removeFavorite(favorite: WeatherCityModel, i: number) {
		this.localStore.toggleFavorites(favorite);
		this.favoriteCurrentWeather.splice(i, 1);
	}

	populateFavoritesWithCurrentWeather() {
		Promise.all(
			this.localStore.favorites.map((city) => {
				return new Promise((resolve, reject) => resolve(this.weatherService.getDailyForecast(city.Key)));
			})
		).then((results: any[]) => (this.favoriteCurrentWeather = results.map((r) => r.data[0])));
	}
}
