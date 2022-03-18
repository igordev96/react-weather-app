import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import locationNameReducer from "./locationNameReducer";
import weatherByCityReducer from "./weatherByCityReducer";
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
  weather: weatherReducer,
  locationName: locationNameReducer,
  cities: citiesReducer,
  weatherByCity: weatherByCityReducer,
});

export default rootReducer;
