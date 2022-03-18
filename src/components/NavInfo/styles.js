import styled from "styled-components";

export const StyledNavInfo = styled.div`
  backdrop-filter: blur(50px);
  width: 35%;
  padding: 0 4rem;
  border-radius: 0 20px 20px 0;
  overflow-y: scroll;
  overflow-x: hidden;

  @media screen and (max-width: 1310px) {
    height: 50%;
    width: 100%;
    padding: 0 2rem;
  }

  h3 {
    margin-bottom: 3rem;
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;

  margin: 3rem 0;
  background-color: rgb(233, 233, 233);
`;

export const WeatherDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const NextDays = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
  gap: 2rem;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .min-max {
    display: flex;

    h4 + h4::before {
      content: "/";
    }
  }
`;
export const NextDaysDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .min-max {
    display: flex;

    h4 + h4::before {
      content: "/";
    }
  }
`;

export const SearchBar = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;

  input {
    background-color: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid #fff3;
    color: white;
    font-size: 1rem;

    @media screen and (max-width: 383px) {
      border-bottom: none;
    }

    ::placeholder {
      color: #fff5;
    }
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    transition: 300ms;

    &:hover {
      transform: translateY(-3px);
    }

    @media screen and (max-width: 383px) {
      .glass {
        width: 2rem;
        position: absolute;
        top: -1rem;
        right: 0;
      }
    }
  }
`;

export const Cities = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h4 {
    transition: 300ms;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const City = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  .close {
    color: white;
    transition: 300ms;
    font-size: 1.2rem;

    &:hover {
      cursor: pointer;
      transform: scale(1.4);
      color: red;
    }
  }
`;
