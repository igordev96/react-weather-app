import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Info, Logo, StyledMain, Weather } from "./styles";
import { getLocationName } from "../../actions/weatherActions";

export default function MainInfo({ isGeoLocation, coords }) {
  const dispatch = useDispatch();

  const weatherList = useSelector((state) => state.weather);
  const locationNameList = useSelector((state) => state.locationName);

  const { locationName, isLoadingLocationName } = locationNameList;

  const { weather, isLoading } = weatherList;
  const { current } = weather;

  const weatherByCityList = useSelector((state) => state.weatherByCity);
  const { isLoadingCoords, cityName } = weatherByCityList;
  const weatherByCity = weatherByCityList.weather;

  useEffect(() => {
    if (isGeoLocation) {
      dispatch(getLocationName(coords.latitude, coords.longitude));
    }
  }, [isGeoLocation]);

  console.log("maininfo");
  return (
    <StyledMain>
      <Logo>
        <h4>react.weather.app</h4>
      </Logo>
      {isLoading ? (
        "Loading..."
      ) : (
        <Info>
          <h1 className="temp">
            {isLoadingCoords
              ? Math.round(current.temp)
              : Math.round(weatherByCity.current.temp)}
            °
          </h1>
          <div className="city-time">
            <h1>
              {isLoadingLocationName
                ? "Leiria"
                : isLoadingCoords
                ? locationName
                : cityName}
            </h1>
            <h4>
              {isLoadingCoords
                ? new Date(current.dt * 1000).toUTCString()
                : new Date(weatherByCity.current.dt * 1000).toUTCString()}
            </h4>
          </div>
          <Weather
            title={
              isLoadingCoords
                ? current.weather[0].description
                : weatherByCity.current.weather[0].description
            }
          >
            <img
              src={
                isLoadingCoords
                  ? `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`
                  : `https://openweathermap.org/img/wn/${weatherByCity.current.weather[0].icon}@2x.png`
              }
              height="72px"
              alt="weather description"
            />
            <h4>
              {isLoadingCoords
                ? current.weather[0].main
                : weatherByCity.current.weather[0].main}
            </h4>
          </Weather>
        </Info>
      )}
    </StyledMain>
  );
}
