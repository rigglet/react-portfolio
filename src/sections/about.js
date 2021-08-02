//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
//import Loader from "../components/Loader";
import profile from "../img/profile.png";
import Icon from "../components/Icon";
import StyledLine from "../styles/styledLine";

import {
  fadeInOut,
  elementSlideInOut,
  containerSlideInOutLeft,
} from "../styles/animations";
import useScroll from "../components/useScroll";

const About = ({ aboutRef }) => {
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
        //variants={containerSlideInOutLeft}
        initial="initial"
        animate={controls}
      >
        <div className="gradientLeft" />
        <div className="inner-container" ref={aboutRef}>
          <div className="section-header">
            <div className="section-title-content">
              <Icon
                icon="FaRegUserCircle"
                size="30px"
                color="#313131"
                title="About icon"
              />
              <h1 className="section-heading heading-dark">About me</h1>
            </div>
            <StyledLine height="6px" width="100%" bgColor="#f5f5f5" />
          </div>

          <motion.div className="content">
            <motion.img
              className="profile"
              src={profile}
              alt="Author of portfolio"
              variants={elementSlideInOut}
              //variants={fadeInOut}
              initial="initial"
              animate={controls}
            />
            <motion.div
              variants={fadeInOut}
              initial="initial"
              animate={controls}
              className="copy"
            >
              <motion.article
              // variants={fadeInOut}
              // initial="initial"
              // animate={controls}
              >
                <p>Hi, I'm</p>
                <p>
                  <span id="first">Neil </span>
                </p>
                <p id="last">
                  <span>Rigg</span>
                  <span id="dot">.</span>
                </p>
              </motion.article>
              <motion.article
              // variants={fadeInOut}
              // initial="initial"
              // animate={controls}
              >
                <p>
                  I am a graduate with a&nbsp;
                  <span className="highlight">
                    BSc in Computer Systems and Networks
                  </span>
                  &nbsp;with&nbsp;
                  <span className="highlight">
                    over 5 years of relevant industry experience
                  </span>
                  &nbsp; in the full software development life-cycle. From
                  requirements gathering, to designing and building systems in
                  response to the needs of the customer.
                </p>
              </motion.article>
            </motion.div>
          </motion.div>
        </div>
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
  .inner-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
    //row-gap: 1rem;
    z-index: 100;
  }
  .content {
    position: static;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    //justify-content: space-between;
    column-gap: 2rem;
    .copy {
      height: 100%;
      width: 100%;
      //display: flex;
      //flex-direction: column;
      //align-items: flex-start;
      //justify-content: space-around;
      #first {
        display: inline-block;
        font-size: 4rem;
        color: #689ed0;
        color: #313131;
        font-weight: 700;
        //text-align: center;
        width: 100%;
        border: 1px solid red;
        line-height: 50px;
      }
      #last {
        //display: inline-block;
        font-size: 6rem;
        color: #313131;
        color: #689ed0;
        font-weight: 700;
        //justify-self: center;
        //text-align: right;
        width: 100%;
        line-height: normal;
      }
      #dot {
        //display: inline;
        font-size: 6rem;
        color: #689ed0;
        color: #313131;
        font-weight: 700;
        //justify-self: center;
        text-align: right;
        width: 100%;
        line-height: 0;
      }
      article {
        //display: flex;
        //flex-direction: column;
        //flex-grow: 1;
        width: 100%;
        padding: 1rem;
        font-weight: 200;
        text-align: justify;
        border: 1px solid red;
        font-size: 2rem;
        //line-height: 5rem;
        //z-index: 100;
        //font-style: italic;
        //font-variant: normal;
        //font-weight: lighter;
        /* &:nth-of-type(2) {
          line-height: 2rem;
          text-indent: 2rem;
          font-size: 1.5rem;
        } */
        .highlight {
          font-weight: 600;
          color: #65617d;
        }
      }
    }
    /* article:before,
      article:after {
        content: '"';
        font-weight: bold;
        font-size: 32pt;
      font-style: italic;
      font-family: monospace;
    } */
    .profile {
      z-index: 10;
      min-width: 400px;
      height: 400px;
      border: 4px solid #313131;
      background: whitesmoke;
      padding: 8px;
      border-radius: 50%;
      overflow: hidden;
      object-fit: scale-down;
      object-position: center;
    }
  }
`;

export default About;
