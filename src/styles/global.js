import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: #F0F2F5; 
    -webkit-font-smoothing: antialiased;
  }

  button, a {
    cursor: pointer;
  }
`;