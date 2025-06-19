import { useParams, useSearchParams } from "react-router-dom";
import {useWeatherQuery} from "@/hooks/use-weather";
import {useForecastQuery} from "@/hooks/use-weather";
import { Alert } from "@/components/ui/alert";
import { AlertDescription } from "@/components/ui/alert";
import { AlertTitle } from "@/components/ui/alert";
import WeatherSkeleton  from "@/components/loading-skeleton";
import { AlertTriangle } from "lucide-react";
import CurrentWeather from "@/components/current-weather"
import HourlyTemperature from "@/components/hourly-temperature"
import WeatherDetails from "@/components/weather-details"
import WeatherForecast from "@/components/weather-forecast"


const CityPage = () => {
  const [searchParams] = useSearchParams(); 
  const params = useParams();
  const lat=parseFloat(searchParams.get("lat") || "0");
  const lon=parseFloat(searchParams.get("lon") || "0");

  const coordinates = { lat,lon };

  const forecastQuery = useForecastQuery(coordinates);
  const weatherQuery = useWeatherQuery(coordinates);

  if(weatherQuery.error || forecastQuery.error){
    return (
      <Alert variant="destructive">
      <AlertTriangle className="h-4 w-4"/>
      <AlertTitle>Error</AlertTitle>
      <AlertDescription className="flex flex-col gap-4">
        Failed to load weather data. Please try again.
      </AlertDescription>
    </Alert>
    )
  }

  if(!weatherQuery.data || !forecastQuery.data || !params.cityName){
    return <WeatherSkeleton/>;
  }

  return (
    <div className="space-y-4">
    {/* Favorite Cities */}
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold tracking-tight">
        {params.cityName}, {weatherQuery.data.sys.country}
        </h1>
        <div>
          {/* favorite button */}
        </div>
      
    </div>

    {/* Current and Hourly Weather */}
    <div className="grid gap-6">
      <div className="flex flex-col gap-4">

        {/* current weather */}
        <CurrentWeather
         data={weatherQuery.data}
        />

        {/* hourly temperature */}
        <HourlyTemperature data={forecastQuery.data} />

      </div>

      <div className="grid gap-6 md:grid-cols-2 items-start">
        {/* details */}
        <WeatherDetails data={weatherQuery.data} />

        {/* forecast  */}
        <WeatherForecast data={forecastQuery.data}/>

      </div>
    </div>
  </div>
  )
};

export default CityPage
