const initialState = {
  locationName: "",
  isLoadingLocationName: true,
};

export default function locationNameReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_LOCATION_NAME":
      return {
        ...state,
        locationName: action.payload,
        isLoadingLocationName: false,
      };
    default:
      return state;
  }
}
