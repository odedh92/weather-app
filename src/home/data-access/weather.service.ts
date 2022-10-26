import { Injectable } from '@angular/core';
import { ApiClientService } from 'src/shared/data-access/api-client.service';
import { ForecastResponse, Temperature, TemperatureData, TodayForecast } from 'src/shared/model/forecast.model';
import { WeatherCityModel } from 'src/shared/model/weather-city.model';
import { environment } from 'src/environments/environment';


const routes = {
	base: 'http://dataservice.accuweather.com/',
	forecast: {
		daily: (cityKey:string) => routes.base + `currentconditions/v1/${cityKey}`,
		fiveDay: (cityKey:string) => routes.base + `forecasts/v1/daily/5day/${cityKey}`
	},
	location: {
		autocomplete: () => routes.base + `locations/v1/cities/autocomplete/`
	}
};

const apiKey = environment.weather_api_key;

@Injectable({
	providedIn: 'root'
})
export class WeatherService {

	currentWeather:TodayForecast | undefined 
	fiveDayWeather: ForecastResponse | undefined
    viewingCity : WeatherCityModel | undefined
	units : 'C' | 'F' = 'C'
	constructor(private apiClient: ApiClientService) {
		this.fetchWeatherByCityName("Tel aviv")
	}

	async fetchWeatherByCityName (city:string) {
		const cityModel = await this.getCityIdByLocation(city);
		if(cityModel?.data && cityModel.data[0])
			await this.getWeather(cityModel.data[0])
	}


	async getWeather(city:WeatherCityModel) {
		this.viewingCity = city;
		 const currentWeatherForecastResult = await this.getDailyForecast(city.Key);
		 const fiveDayWeaterForecastResult = await this.getFiveDayForecast(city.Key);

		 if(currentWeatherForecastResult.data)
			this.currentWeather = currentWeatherForecastResult.data[0]
		 if(fiveDayWeaterForecastResult.data)
			this.fiveDayWeather = fiveDayWeaterForecastResult.data
	}

	 async getDailyForecast(cityKey: string) {
		return await this.apiClient.get<TodayForecast[]>({
			url: routes.forecast.daily(cityKey),
			params: {
				apikey: apiKey
			}
		});
	}

	async getFiveDayForecast(cityKey: string) {
		return await this.apiClient.get<ForecastResponse>({
			url: routes.forecast.fiveDay(cityKey),
			params: {
				apikey: apiKey
			}
		});
	}

	async getCityIdByLocation(cityName: string) {
		return await this.apiClient.get<WeatherCityModel[]>({
			url: routes.location.autocomplete(),
			params: {
				apikey: apiKey,
				q: cityName
			}
		});
	}
	createIconURL(icon: number | string): string {
		return 'https://developer.accuweather.com/sites/default/files/' + (icon < 10 ? '0' : '') + icon + '-s.png';
	}


	toggleUnits() {
		this.units = this.units === 'C' ? 'F' : 'C'
	}
	// convertTemperature(temperature: number, positionMetric: boolean) {
	// 	if (this.isMetric && !positionMetric) return ((temperature - 32) / 1.8).toFixed(0);
	// 	else if (!this.isMetric && positionMetric) return (temperature * 1.8 + 32).toFixed(0);
	// 	else return temperature.toFixed(0);
	// }
}
