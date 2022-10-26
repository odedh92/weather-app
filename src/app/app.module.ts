import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {InputSwitchModule} from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/shared/ui/header/header.component';
import { CelsiusFahrenheitToggleComponent } from 'src/home/ui/celsius-fahrenheit-toggle/celsius-fahrenheit-toggle.component';
import { CurrentWeatherComponent } from 'src/home/ui/currentWeather/current-weather/current-weather.component';
import { SearchComponent } from 'src/home/ui/search/search.component';
import { HomeWeatherComponent } from 'src/home/feature/home-weather/home-weather.component';
import { DailyForecastComponent } from 'src/home/ui/daily-forecast/daily-forecast.component';
import { FavoritesComponent } from 'src/favorites/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CelsiusFahrenheitToggleComponent,
    CurrentWeatherComponent,
    HomeWeatherComponent,
    DailyForecastComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    InputSwitchModule,
    FormsModule,
    CardModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
