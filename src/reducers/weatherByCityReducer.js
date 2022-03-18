const initialState = {
  coords: {},
  weather: {},
  cityName: "",
  isLoadingCoords: true,
};

export default function weatherByCityReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_WEATHER_BY_CITY":
      return {
        ...state,
        coords: action.payload.cityCoords,
        weather: action.payload.weatherData,
        cityName: action.payload.cityName,
        isLoadingCoords: false,
      };
    default:
      return state;
  }
}
