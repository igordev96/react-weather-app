export const weatherApi = (lat, lon) =>
  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${
    import.meta.env.VITE_API_KEY
  }`;

export const coordsByName = (name) => {
  return `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${
    import.meta.env.VITE_API_KEY
  }`;
};

export const nameByCoords = (lat, lon) => {
  return `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${
    import.meta.env.VITE_API_KEY
  }`;
};
