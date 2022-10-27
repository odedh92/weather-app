interface Temperature {
	Value: number; //52,
	Unit: string; //"F",
	UnitType: number; //18
}
interface TemperatureData {
	Minimum: Temperature;
	Maximum: Temperature;
}

interface DayData {
	Icon: string; //14;
	IconPhrase: string; // 'Partly sunny w/ showers';
	HasPrecipitation: boolean; // true;
	PrecipitationType: string; //'Rain';
	PrecipitationIntensity: string; // 'Light';
}

interface Headline {
	EffectiveDate: string;
	EffectiveEpochDate: number;
	Severity: number; 
	Text: string;
	Category: string; 
	EndDate: string; 
	EndEpochDate: number; 
	MobileLink: string; 
	Link: string; 
}
interface ForecastModel {
	Date: string;
	EpochDate: number;
	Temperature: TemperatureData;
	Day: DayData;
	Night: DayData;
	Sources: string[];
	MobileLink: string; 
	Link: string; 
}

interface TodayForecast {
	LocalObservationDateTime: number
	EpochTime: number;
	WeatherText:string
	WeatherIcon: number;
	HasPrecipitation: false;
	PrecipitationType: never;
	IsDayTime: boolean;
	Temperature: {
		Metric: Temperature;
		Imperial: Temperature;
	};
	MobileLink: string;
	Link: string;
}
//5day
interface ForecastResponse {
	Headline: Headline;
	DailyForecasts: ForecastModel[];
}

export { ForecastModel, ForecastResponse, DayData, Temperature, TemperatureData,TodayForecast, Headline };
