import axios from "axios";
import { coordsByName, nameByCoords, weatherApi } from "../api";

export const getWeatherFromLocation =
  (lat = 39.74, lon = -8.81) =>
  async (dispatch) => {
    const res = await axios.get(weatherApi(lat, lon));

    dispatch({
      type: "GET_WEATHER",
      payload: res.data,
    });
  };

export const getLocationName = (lat, lon) => async (dispatch) => {
  const res = await axios.get(nameByCoords(lat, lon));

  dispatch({
    type: "GET_LOCATION_NAME",
    payload: res.data[0].name,
  });
};

export const getWeatherByCity = (city) => async (dispatch) => {
  const cityRes = await axios.get(coordsByName(city));
  const cityCoords = { lat: cityRes.data[0].lat, lon: cityRes.data[0].lon };

  const weatherRes = await axios.get(
    weatherApi(cityRes.data[0].lat, cityRes.data[0].lon)
  );
  const weatherData = weatherRes.data;

  dispatch({
    type: "GET_WEATHER_BY_CITY",
    payload: {
      cityCoords,
      weatherData,
      cityName: city,
    },
  });
};
