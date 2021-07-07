//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import Loader from "../components/Loader";
import profile from "../img/profile.png";
import { aboutVariants } from "../styles/animations";

const About = () => {
  return (
    <AboutSection
      className="section-light fullheight"
      id="about"
      variants={aboutVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container container-light container-left">
        <div className="gradientLeft" />
        <div className="content">
          {/* <h1>About</h1> */}
          <img className="profile" src={profile} alt="Author of portfolio" />
          <article>In west Philadelphia born and raised...</article>
        </div>
      </div>
      {/* <Loader /> */}
    </AboutSection>
  );
};

const AboutSection = styled(motion.div)`
  display: flex;
  align-items: center;
  //edit justify content if switching sides
  justify-content: flex-start;

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
`;

export default About;
