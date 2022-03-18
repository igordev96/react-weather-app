import { useDispatch, useSelector } from "react-redux";
import { GiMagnifyingGlass } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import {
  Cities,
  City,
  Details,
  Line,
  NextDays,
  NextDaysDetails,
  SearchBar,
  StyledNavInfo,
  WeatherDetails,
} from "./styles";
import { useState } from "react";
import { setCitiesList, deleteCitiesList } from "../../actions/citiesActions";
import { getWeatherByCity } from "../../actions/weatherActions";

export default function NavInfo() {
  const weatherList = useSelector((state) => state.weather);
  const cities = useSelector((state) => state.cities);
  const weatherByCityList = useSelector((state) => state.weatherByCity);

  const dispatch = useDispatch();

  const [inputCity, setInputCity] = useState("");

  const { weather, isLoading } = weatherList;
  const { current, daily } = weather;

  const { isLoadingCoords } = weatherByCityList;
  const weatherByCity = weatherByCityList.weather;

  const getDayOfTheWeek = (day) => {
    switch (day) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        return "Unexpected";
    }
  };

  const newCityHandler = () => {
    if (inputCity) {
      dispatch(setCitiesList(inputCity));
      setInputCity("");
    }
  };

  const getNewWeather = (city) => {
    dispatch(getWeatherByCity(city));
  };

  const deleteCityHandler = (city) => {
    dispatch(deleteCitiesList(city));
  };

  console.log("navinfo");
  return (
    <StyledNavInfo>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <Line />
          <SearchBar>
            <input
              value={inputCity}
              onChange={(e) => {
                setInputCity(e.target.value);
              }}
              placeholder="Another Location"
              type="text"
            />
            <button onClick={newCityHandler}>
              <GiMagnifyingGlass
                className="glass"
                size={"3rem"}
                color={"white"}
              />
            </button>
          </SearchBar>
          <Cities>
            {cities.map((city) => (
              <City key={city}>
                <h4 onClick={() => getNewWeather(city)}>{city}</h4>
                <AiOutlineClose
                  className="close"
                  onClick={() => deleteCityHandler(city)}
                />
              </City>
            ))}
          </Cities>
          <Line />
          <WeatherDetails>
            <h3>Weather Details</h3>
            <Details>
              <h4>Cloudy</h4>
              <h4>
                {isLoadingCoords
                  ? current.clouds
                  : weatherByCity.current.clouds}
                %
              </h4>
            </Details>
            <Details>
              <h4>Humidity</h4>
              <h4>
                {isLoadingCoords
                  ? current.humidity
                  : weatherByCity.current.humidity}
                %
              </h4>
            </Details>
            <Details>
              <h4>Wind</h4>
              <h4>
                {isLoadingCoords
                  ? current.wind_speed
                  : weatherByCity.current.wind_speed}{" "}
                km/h
              </h4>
            </Details>
          </WeatherDetails>
          <Line />
          <h3>Next Days</h3>
          <NextDays>
            {isLoadingCoords
              ? daily.map((day, index) => {
                  if (index != 0) {
                    return (
                      <NextDaysDetails
                        key={day.dt}
                        title={day.weather[0].description}
                      >
                        <h4>
                          {getDayOfTheWeek(new Date(day.dt * 1000).getUTCDay())}
                        </h4>
                        <img
                          src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                          alt={day.weather[0].description}
                        />
                        <div className="min-max">
                          <h4>{Math.round(day.temp.min)}°</h4>
                          <h4>{Math.round(day.temp.max)}°</h4>
                        </div>
                      </NextDaysDetails>
                    );
                  }
                })
              : weatherByCity.daily.map((day, index) => {
                  if (index != 0) {
                    return (
                      <NextDaysDetails
                        key={day.dt}
                        title={day.weather[0].description}
                      >
                        <h4>
                          {getDayOfTheWeek(new Date(day.dt * 1000).getUTCDay())}
                        </h4>
                        <img
                          src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                          alt={day.weather[0].description}
                        />
                        <div className="min-max">
                          <h4>{Math.round(day.temp.min)}°</h4>
                          <h4>{Math.round(day.temp.max)}°</h4>
                        </div>
                      </NextDaysDetails>
                    );
                  }
                })}
          </NextDays>
          <Line />
        </>
      )}
    </StyledNavInfo>
  );
}
