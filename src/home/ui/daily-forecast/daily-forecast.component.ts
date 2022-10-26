import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/home/data-access/weather.service';
import { LocalStorageService } from 'src/shared/data-access/local-storage.service';
import * as moment from 'moment';
@Component({
	selector: 'app-daily-forecast',
	templateUrl: './daily-forecast.component.html',
	styleUrls: [ './daily-forecast.component.css' ]
})
export class DailyForecastComponent implements OnInit {
	constructor(public weatherService: WeatherService) {
		
	}

	ngOnInit(): void {}

	dayFromDate(date: string) {
		return moment.weekdays(new Date(date).getDay());
	}
}
