import { Injectable } from '@angular/core';
import { WeatherCityModel } from '../model/weather-city.model';
@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {
	favorites:WeatherCityModel[];
	constructor() {
     	this.favorites = this.getFavorites()
	}


	getFavorites() : WeatherCityModel[] {
		const value = localStorage.getItem('favorites');
		if (!value) return [];
		const parsed = JSON.parse(value);
		return parsed 
	}

	toggleFavorites(city:WeatherCityModel){
	  	const index = this.favorites.findIndex( c => c.Key === city.Key)
			if(index >= 0) 
				this.favorites.splice(index,1);
			else 
				this.favorites.push(city);
		this.save()
	}
	
	private save(cities: WeatherCityModel[] = []) {
		localStorage.setItem("favorites",JSON.stringify([...this.favorites, ...cities]))
	}
}
