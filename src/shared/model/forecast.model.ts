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
	EffectiveDate: string; //"2022-10-24T14:00:00+01:00",
	EffectiveEpochDate: number; //1666616400,
	Severity: number; //5,
	Text: string; //"Expect showers Monday afternoon",
	Category: string; // "rain",
	EndDate: string; // "2022-10-24T20:00:00+01:00",
	EndEpochDate: number; // 1666638000,
	MobileLink: string; // "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?lang=en-us",
	Link: string; // "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?lang=en-us"
}
interface ForecastModel {
	Date: string; //"2022-10-24T07:00:00+01:00",
	EpochDate: number; // 1666591200,
	Temperature: TemperatureData;
	Day: DayData;
	Night: DayData;
	Sources: string[];
	MobileLink: string; //"http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=1&lang=en-us",
	Link: string; //"http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=1&lang=en-us"
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
