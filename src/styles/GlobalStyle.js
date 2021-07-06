//font-family: 'Inter', sans-serif;
//font-family: 'Lobster', cursive;
//font-family: 'Montserrat', sans-serif;
//gradient colors - #34CE93
//#59ADEB

// #1c3b57 0%,
//       #65617d 25%,
//       #689ed0 50%,
//       #c6c6c6 75%,
//       #f5f5f5

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
  scroll-behavior: smooth;
}

body{
    //color: whitesmoke;
    background: #111111;
    //font-family: 'Inter', sans-serif;
    font-family: 'Poppins', sans-serif;
}

.app{
  scroll-snap-type: y mandatory;
  //scroll-padding: 100px;
  overflow-y: scroll;
  height: 100vh;
  overflow-x: hidden;
}

//section
.section{
  scroll-snap-align: end;
  padding: 1vh 1vw;
}
.extraheight{
  height: 140vh;
  margin-top: 10vh;
}
.fullheight{
  height: 90vh;
  margin-top: 10vh;
}
.halfheight{
  height: 50vh;
  scroll-snap-align: center;
}
.twothirdsheight{
  height: 66vh;
  scroll-snap-align: center;
  padding: 0;
}

.section-dark{
  background-color: #111111;
  color: whitesmoke;
}

.section-light{
  background-color: whitesmoke;
  color: #111111;
}

.gradientLeft {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 20%;
    background: linear-gradient(
      90deg,
      #1c3b57 0%,
      #65617d 25%,
      #689ed0 50%,
      #c6c6c6 75%,
      #f5f5f5 100%
    );
  }

  .gradientRight {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 20%;
    background: linear-gradient(
      90deg,
      #1c3b57 0%,
      #65617d 25%,
      #689ed0 50%,
      #c6c6c6 75%,
      #f5f5f5 100%
    );
    background: linear-gradient(
      90deg,
      #f5f5f5 0%,
      #c6c6c6 25%,
      #689ed0 50%,
      #65617d 75%,
      #1c3b57 100%
    );
  }

//h1 heading on some sections
.section-heading {
  font-weight: 100;
  font-size: 28pt;
}

//h2 sub-heading on some sections
.section-subheading {
  font-weight: 100;
  font-size: 28pt;
}


//scrollbar styling
/* ::-webkit-scrollbar — the entire scrollbar.
::-webkit-scrollbar-button — the buttons on the scrollbar (arrows pointing upwards and downwards).
::-webkit-scrollbar-thumb — the draggable scrolling handle.
::-webkit-scrollbar-track — the track (progress bar) of the scrollbar.
::-webkit-scrollbar-track-piece — the part of the track (progress bar) not covered by the handle.
::-webkit-scrollbar-corner — the bottom corner of the scrollbar, where both horizontal and vertical scrollbars meet.
::-webkit-resizer — the draggable resizing handle that appears at the bottom corner of some elements. */
/* The emerging W3C standard
   that is currently Firefox-only */
* {
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.7) transparent;
}

/* Works on Chrome/Edge/Safari */
*::-webkit-scrollbar {
  width: 7px;
}
*::-webkit-scrollbar-track {
  background: transparent;
}
*::-webkit-scrollbar-thumb {
  background-color: #689ed0;
  background-color: black;
  border-radius: 20px;
  border: 1px solid white;
}

button, input[type='submit']{
    //font-weight: bold;
    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 1rem 3rem;
    border: 2px solid #689ed0;
    color: #689ed0;
    background: transparent;
    
    //transition: all 0.5s ease;
    border-radius: 20px;
    
    &:hover{
      background: #689ed0;
      background: linear-gradient(90deg, #1c3b57 0%, #65617d 33%, #689ed0 66%, #c6c6c6 100%);
      color: black;
      border: 2px solid #689ed0;
      background-size: 400%;
      background-position: center;
      animation: gradient 2s linear infinite alternate;
    }
    
    @keyframes gradient {
  0% {
    background-position: 100%;
  }
  100% {
    background-position: 0%;
  }
}
    &:active{
      transform: translateY(3px);
      }
    &:focus {
      outline-style: none;
      -moz-outline-style: none;
    }
}

/* button, input[type='submit']{
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
} */

.close {
  cursor: pointer;
  width: 25px;
  height: 25px;
  color: white;
  &:active {
    transform: translateY(1px);
    color: #689ed0;
  }
  &:hover {
    color: #689ed0;
  }
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
    padding: 0.3rem;
    margin-left: 2rem;
    font-size: 1rem;
    background-color: #666666;
    color: white;
  }

    
//React-toastify - Toast close button
.toastClose{
    color: #689ed0;
    cursor: pointer;
    height: 25px;
    width: 25px;
    &:hover{
        color: transparent;
        color: grey;
    }
    &:active,
    &:focus {
      outline-style: none;
      -moz-outline-style: none;
      transform: translateY(1px);
    }
}
    
    //SLIDER
    /* The switch - the box around the slider */

.switch {
  position: relative;
  display: inline-block;
  width: 2.5rem;
  height: 1.25rem;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1rem;
  width: 1rem;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #689ed0;
}

input:focus + .slider {
  box-shadow: 0 0 1px #689ed0;
}

input:checked + .slider:before {
  -webkit-transform: translateX(1.25rem);
  -ms-transform: translateX(1.25rem);
  transform: translateX(1.25rem);
}

/* Rounded sliders */
.slider.round {
  border-radius: 17px;
}

.slider.round:before {
  border-radius: 50%;
}
`;

export default GlobalStyle;
