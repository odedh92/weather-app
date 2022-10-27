import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/components/home/data-access/weather.service';
import { LocalStorageService } from 'src/components/shared/data-access/local-storage.service';

@Component({
	selector: 'app-units-toggle',
	templateUrl: './units-toggle.component.html',
	styleUrls: [ './units-toggle.component.css' ]
})
export class UnitsToggleComponent implements OnInit {
	constructor(public localStore: LocalStorageService) {}

	ngOnInit(): void {}
}
