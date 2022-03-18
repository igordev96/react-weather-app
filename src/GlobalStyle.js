import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const getWeatherCondition = (id) => {
  if (id > 800) {
    return "cloudy";
  } else if (id == 800) {
    return "clear-sky";
  } else if (id > 700) {
    return "mist";
  } else if (id >= 600) {
    return "snow";
  } else if (id >= 300) {
    return "rain";
  } else {
    return "thunderstorm";
  }
};

export const StyledApp = styled.main`
  height: 85vh;
  width: 90vw;

  display: flex;
  background-image: ${(props) =>
    props.id ? `url(src/images/${getWeatherCondition(props.id)}.jpg)` : ""};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;

  @media screen and (max-width: 1310px) {
    flex-direction: column;
    height: 95vh;
  }

  .bg-image {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: -1;
    background-image: ${(props) =>
      props.id ? `url(src/images/${getWeatherCondition(props.id)}.jpg)` : ""};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: blur(8px);
    transform: scale(1.1);
  }
`;

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    user-select: none;
  }

  h1, h2, h3, h4, h5, h6, p {
    text-shadow: 0 0 6px #111;
    color: rgb(233, 233, 233);
  }

  body {
    height: 100vh;
    width: 100vw;

    display: grid;
    place-items: center;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #888;
  }

  ::-webkit-scrollbar-thumb {
    background: #333;
  }
`;
