import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/components/home/data-access/weather.service';
import { LocalStorageService } from 'src/components/shared/data-access/local-storage.service';
import { WeatherCityModel } from 'src/components/shared/model/weather-city.model';
@Component({
	selector: 'app-current-weather',
	templateUrl: './current-weather.component.html',
	styleUrls: [ './current-weather.component.css' ]
})
export class CurrentWeatherComponent implements OnInit {
	constructor(public weatherService: WeatherService, public localStore: LocalStorageService) {
		if (window.history.state.Key) {
			// nvagiation from favorites
			weatherService.getWeather(window.history.state);
		}
	}

	ngOnInit(): void {}

	toggleFavorites(city: WeatherCityModel | undefined) {
		if (city) this.localStore.toggleFavorites(city);
	}

	isFavorite(cityKey: string) {
		let city = this.localStore.favorites.find((city) => city.Key === cityKey);
		return city !== undefined;
	}
}
