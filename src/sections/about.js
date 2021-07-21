//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
//import Loader from "../components/Loader";
import profile from "../img/profile.png";
import {
  fadeInOut,
  elementSlideInOut,
  containerSlideInOutLeft,
} from "../styles/animations";
import useScroll from "../components/useScroll";

const About = () => {
  const [element, controls] = useScroll();

  return (
    <AboutSection
      className="section-light fullheight"
      id="about"
      ref={element}
      // variants={aboutVariants}
      // initial="initial"
      // animate={controls}
      // animate="animate"
    >
      <motion.div
        className="container container-light container-left"
        variants={containerSlideInOutLeft}
        initial="initial"
        animate={controls}
      >
        <div className="gradientLeft" />
        <motion.div className="content">
          {/* <h1>About</h1> */}
          <motion.img
            className="profile"
            src={profile}
            alt="Author of portfolio"
            variants={elementSlideInOut}
            initial="initial"
            animate={controls}
          />
          <motion.article
            variants={fadeInOut}
            initial="initial"
            animate={controls}
          >
            I am a graduate with a
            <span> BSc in Computer Systems and Networks</span> with
            <span> over 5 years of relevant industry experience</span> in the
            full software development life-cycle. From requirements gathering,
            to designing and building systems in response to the needs of the
            customer.
          </motion.article>
        </motion.div>
      </motion.div>
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
    justify-content: space-between;
    column-gap: 3rem;
    article {
      z-index: 100;
      font-style: italic;
      font-weight: 200;
      font-size: 16pt;
      text-align: justify;
      text-indent: 2rem;
      font-variant: normal;
      span {
        font-weight: 700;
      }
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
      min-width: 400px;
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
