import styled from "styled-components";

export const StyledMain = styled.div`
  background-color: transparent;
  height: 100%;
  width: 65%;
  position: relative;

  @media screen and (max-width: 1310px) {
    height: 60%;
    width: 100%;
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: 4rem;
  left: 8rem;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    filter: drop-shadow(0 0 4px #6080ff);
    transform: scale(1.1);
  }

  @media screen and (max-width: 1310px) {
    display: none;
  }
`;

export const Info = styled.div`
  position: absolute;
  bottom: 8rem;
  left: 8rem;

  @media screen and (max-width: 1310px) {
    position: static;
    width: 100%;
    height: 100%;
    /* flex-direction: column; */
    margin-top: 1rem;
    gap: 1rem;
  }

  @media screen and (max-width: 490px) {
    flex-direction: column;
  }

  display: flex;
  align-items: center;
  gap: 2rem;

  .temp {
    font-size: 6rem;
    font-weight: 400;
  }

  .city-time {
    text-align: center;
    width: 20rem;

    @media screen and (max-width: 1310px) {
      width: 100%;
    }

    h1 {
      font-size: 4rem;
      font-weight: 500;
    }
  }
`;

export const Weather = styled.div`
  text-align: center;
`;
