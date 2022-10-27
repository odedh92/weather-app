import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/components/shared/ui/header/header.component';
import { CurrentWeatherComponent } from 'src/components/home/ui/currentWeather/current-weather/current-weather.component';
import { SearchComponent } from 'src/components/home/ui/search/search.component';
import { HomeWeatherComponent } from 'src/components/home/feature/home-weather/home-weather.component';
import { DailyForecastComponent } from 'src/components/home/ui/daily-forecast/daily-forecast.component';
import { FavoritesComponent } from 'src/components/favorites/favorites.component';
import { UnitsToggleComponent } from '../components/home/ui/units-toggle/units-toggle.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SearchComponent,
		CurrentWeatherComponent,
		UnitsToggleComponent,
		HomeWeatherComponent,
		DailyForecastComponent,
		FavoritesComponent,
		UnitsToggleComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ButtonModule,
		MenubarModule,
		InputTextModule,
		InputSwitchModule,
		FormsModule,
		CardModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
