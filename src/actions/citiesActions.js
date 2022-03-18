export const deleteCitiesList = (city) => {
  return {
    type: "DELETE_CITIES",
    payload: city,
  };
};

export const setCitiesList = (newCity) => {
  return {
    type: "SET_CITIES",
    payload: newCity,
  };
};
