//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import Loader from "../components/Loader";
import profile from "../img/profile.png";
import { aboutVariants } from "../styles/animations";

const About = () => {
  return (
    <AboutSection
      className="section fullheight"
      id="about"
      variants={aboutVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container section-light">
        {/* <h1>About</h1> */}
        <div className="content">
          <div className="gradientLeft" />
          <img className="profile" src={profile} alt="Author of portfolio" />
          <article>In west Philadelphia born and raised...</article>
        </div>
      </div>
      {/* <Loader /> */}
    </AboutSection>
  );
};

const AboutSection = styled(motion.div)`
  background: #111111;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .container {
    border: 6px;
    border-color: #689ed0;
    border-style: solid solid solid none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 90%;
    border-radius: 0 100px 100px 0;
    h1 {
      z-index: 10;
      position: absolute;
      font-family: "Lato", sans-serif;
      font-weight: 500;
      font-size: 32pt;
      text-transform: uppercase;
    }
    .content {
      position: static;
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: space-evenly;
      article {
        z-index: 100;
        font-style: italic;
        font-weight: 200;
        font-size: 16pt;
        text-align: justify;
        text-indent: 2rem;
        font-variant: normal;
      }
      article:before,
      article:after {
        content: '"';
        font-weight: bold;
        font-size: 32pt;
        font-style: italic;
        font-family: monospace;
      }
      .profile {
        z-index: 10;
        width: 400px;
        height: 400px;
        border: 8px solid black;
        padding: 8px;
        border-radius: 50%;
        overflow: hidden;
        object-fit: scale-down;
        object-position: center;
      }
    }
  }
`;

export default About;
