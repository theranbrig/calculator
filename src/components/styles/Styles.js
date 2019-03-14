import styled from 'styled-components';

export const CalculatorStyles = styled.div`
  background-color: #4abdac;
  max-width: 100%;
  min-height: 100vh;
  display: grid;
  justify-items: center;
  grid-template-areas:
    'display'
    'numbers';
  .display {
    font-family: 'Orbitron', serif;
    grid-area: display;
    h1 {
      font-size: 4rem;
      color: white;
      text-align: center;
      margin: 40px 0;
    }
  }
  .number-pad {
    grid-area: numbers;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    padding: 0px 0px 30px;
    width: 450px;
    .button-div:focus {
      outline: none;
    }
    button {
      width: 100%;
      height: 80px;
      border-radius: 20px;
      border: 3px solid white;
      font-size: 2rem;
      color: white;
      font-family: 'Orbitron', serif;
      background: #e17055;
      &:focus {
        outline: none;
      }
      &:hover {
        border: 3px solid #dfe6e9;
        font-weight: 500;
      }
    }
    button.function-button {
      background-color: #2d3436;
    }
    button.white-button {
      color: #2d3436;
      background-color: white;
    }
  }
  .zero-button {
    grid-column: 1/3;
  }
`;

export const DisplayStyles = styled.div`
  display: grid;
  grid-template-rows: 90px 50px;
  grid-template-columns: 1fr;
  border: 4px solid white;
  margin: 10px;
  width: 700px;
  align-items: center;
  border-radius: 20px;
  background: #e17055;
  h2,
  p {
    text-align: center;
    color: white;
  }
  h2 {
    font-size: 2.5rem;
    margin: 0;
    text-align: right;
    padding: 0px;
    border-bottom: 4px solid white;
    padding: 15px 20px;
  }
  p {
    margin: 5px 0;
    font-size: 1.3rem;
  }
`;
