//font-family: 'Inter', sans-serif;
//font-family: 'Lobster', cursive;
//font-family: 'Montserrat', sans-serif;
//gradient colors - #34CE93
//#59ADEB

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

/* html{
    @media (max-width: 1700px){
        font-size: 75%;
    }   
} */

body{
    color: #FFFFFF;
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
    /* overflow-x: hidden; */
}

button{
    //font-weight: bold;
    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 1rem 3rem;
    border: 3px solid #689ed0;
    background: transparent;
    color: #689ed0;
    transition: all 0.5s ease;
    &:hover{
        background-color: #689ed0;
        color: black;
    }
    &:active,
    &:focus {
      outline-style: none;
      -moz-outline-style: none;
    }
}
h1{
    color:white;
}
.icon {
    color: white;
    padding: 0.15rem;
    height: 45px;
    width: 45px;
  }
.filter {
    color: white;
    padding: 0rem;
    height: 30px;
    width: 30px;
  }
  select {
    outline-style: none;
    -moz-outline-style: none;
    padding: 0.5rem;
    margin-left: 2rem;
    font-size: 1rem;
    background-color: #666666;
    color: white;
  }
/*
    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
       
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color:#23d997;
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    } */
`;

export default GlobalStyle;
