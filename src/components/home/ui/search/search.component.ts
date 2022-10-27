import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from 'src/components/home/data-access/weather.service';
import { LocalStorageService } from 'src/components/shared/data-access/local-storage.service';
import { WeatherCityModel } from 'src/components/shared/model/weather-city.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  relevantCitiesSubject:WeatherCityModel[]
  @ViewChild("search") search: ElementRef<HTMLInputElement> | undefined
  constructor(public weatherService :WeatherService, private localStore: LocalStorageService) {
    this.relevantCitiesSubject = []
  }

  ngOnInit(): void {}
   
  async onCitySearch(citySearch:string) {
    const citiesResult = await this.weatherService.getCityIdByLocation(citySearch)
    const relevantCities = citiesResult.data?.filter(city => city.LocalizedName.toLowerCase().includes(citySearch.toLowerCase())) 
    this.relevantCitiesSubject = relevantCities ?? []
  }

  async onSelectCity(city:WeatherCityModel) {
      this.search!!.nativeElement.value = city.LocalizedName;
      this.relevantCitiesSubject = [];
      this.weatherService.getWeather(city);
  }
}
