interface CountryModel {
	ID: string; 
	LocalizedName: string; 
}

export interface WeatherCityModel {
	Version: number;
	Key: string; 
	Type: string; 
	Rank: number; 
	LocalizedName: string; 
	Country: CountryModel;
}

