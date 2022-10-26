interface CountryModel {
	ID: string; // "GB",
	LocalizedName: string; // "United Kingdom"
}

export interface WeatherCityModel {
	Version: number; //1,
	Key: string; //"328328",
	Type: string; //"City",
	Rank: number; // 10,
	LocalizedName: string; // "London",
	Country: CountryModel;
}


