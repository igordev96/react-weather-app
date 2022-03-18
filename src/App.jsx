import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherFromLocation } from "./actions/weatherActions";
import MainInfo from "./components/MainInfo";
import NavInfo from "./components/NavInfo";
import { StyledApp } from "./GlobalStyle";

function App() {
  const [coords, setCoords] = useState({});
  const [isGeoLocation, setIsGeoLocation] = useState(false);

  const dispatch = useDispatch();

  const weatherList = useSelector((state) => state.weather);
  const { weather, isLoading } = weatherList;

  const weatherByCityList = useSelector((state) => state.weatherByCity);
  const { isLoadingCoords } = weatherByCityList;
  const weatherByCity = weatherByCityList.weather;

  useEffect(() => {
    if (!isGeoLocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords(position.coords);
        setIsGeoLocation(true);
      });
    }
  }, []);

  useEffect(() => {
    if (isGeoLocation) {
      dispatch(getWeatherFromLocation(coords.latitude, coords.longitude));
    } else {
      dispatch(getWeatherFromLocation());
    }
  }, [isGeoLocation]);

  console.log("app");
  return (
    <StyledApp
      id={
        isLoading
          ? "default"
          : isLoadingCoords
          ? weather.current.weather[0].id
          : weatherByCity.current.weather[0].id
      }
    >
      <div className="bg-image"></div>
      <MainInfo isGeoLocation={isGeoLocation} coords={coords} />
      <NavInfo />
    </StyledApp>
  );
}

export default App;
