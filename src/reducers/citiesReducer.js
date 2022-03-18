const initialState = ["Aveiro", "Porto", "Lisboa"];

export default function citiesReducer(state = initialState, action) {
  switch (action.type) {
    case "DELETE_CITIES":
      return state.filter((el) => el != action.payload);
    case "SET_CITIES":
      return [...state, action.payload];
    default:
      return state;
  }
}
