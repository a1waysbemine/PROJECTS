import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  
  body {
    font-size: 16px;
    line-height: 1.6;
    font-family:'Poppins';
    color:#333;
    width: 100%;
  }
  a {
    text-decoration: none;
    color:#333; 
  }
  li { list-style:none }
  img { vertical-align: top; }
  
  .inner { width:1600px; height:100%; margin:auto; box-sizing:border-box; position:relative; }
  .subInner { width: 1400px; height:100%;  margin: auto; box-sizing:border-box; position: relative;}
  .main { width: 100%; }
  button { border:none; cursor: pointer; }
`;

export default GlobalStyle;
