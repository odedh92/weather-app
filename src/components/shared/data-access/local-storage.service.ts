import { Injectable } from '@angular/core';
import { WeatherCityModel } from '../model/weather-city.model';
@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {
	favorites:WeatherCityModel[];
	isMetric:boolean = true
	constructor() {
     	this.favorites = this.getFavorites()
		this.isMetric = this.getPrefTemperatureUnits()
	}

	getFavorites() : WeatherCityModel[] {
		const value = localStorage.getItem('favorites');
		if (!value) return [];
		const parsed = JSON.parse(value);
		return parsed 
	}

	getPrefTemperatureUnits() : boolean {
		const value = localStorage.getItem('prefunits');
		if (!value) return false
		const parsed = JSON.parse(value);
		return parsed 
	}

	toggleFavorites(city:WeatherCityModel){
	  	const index = this.favorites.findIndex( c => c.Key === city.Key)
			if(index >= 0) 
				this.favorites.splice(index,1);
			else  {
				this.favorites.push(city);
			}
			localStorage.setItem("favorites",JSON.stringify([...this.favorites]))
	}

	toggleTemperatureUnits() {
		localStorage.setItem("prefunits",JSON.stringify(!this.isMetric))
		this.isMetric = !this.isMetric
	}
}
