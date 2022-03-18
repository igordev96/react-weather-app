const initialState = {
  weather: {},
  isLoading: true,
};

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_WEATHER":
      return {
        ...state,
        weather: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
