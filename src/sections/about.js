//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
//import Loader from "../components/Loader";
import profile from "../img/profile.png";
//import Icon from "../components/Icon";
import StyledLine from "../styles/styledLine";
import { fadeInOut, elementSlideInOut } from "../styles/animations";

const About = ({ aboutRef, aboutControls }) => {
  return (
    <AboutSection ref={aboutRef}>
      <div className="section-header">
        <div className="section-title-content">
          {/* <Icon
                icon="FaRegUserCircle"
                size="30px"
                color="#313131"
                title="About icon"
              /> */}
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
          animate={aboutControls}
        />
        <motion.div
          variants={fadeInOut}
          initial="initial"
          animate={aboutControls}
          className="copy"
        >
          <motion.article
          // variants={fadeInOut}
          // initial="initial"
          // animate={aboutControls}
          >
            <p id="hi">Hi, I'm</p>
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
          // animate={aboutControls}
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
    </AboutSection>
  );
};

const AboutSection = styled(motion.div)`
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  //row-gap: 1rem;
  z-index: 20;

  .content {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    column-gap: 1rem;

    .copy {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      column-gap: 2rem;

      article {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        //width: 100%;
        padding: 0.5rem;
        font-weight: 200;
        text-align: justify;
        font-size: 1.5rem;

        &:first-of-type {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: center;
          row-gap: 1rem;
        }

        .highlight {
          font-weight: 600;
          color: #689ed0;
        }
      }

      #first {
        display: inline-block;
        font-size: 4rem;
        color: #689ed0;
        color: #313131;
        font-weight: 700;
        width: 100%;
        line-height: 70px;
      }
      #last {
        font-size: 6rem;
        color: #313131;
        color: #689ed0;
        font-weight: 700;
        width: 100%;
        line-height: 70px;
      }
      #dot {
        font-size: 6rem;
        color: #313131;
        font-weight: 700;
        //text-align: right;
        width: 100%;
        line-height: 0;
      }
      #hi {
        font-size: 2rem;
      }
    }

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

  //#### RESPONSIVE SECTION ####
  //320px — 480px: Mobile devices
  @media screen and (max-width: 480px) and (orientation: portrait) {
    padding: 2rem 2.5rem;
    z-index: 20;

    .content {
      margin-top: 1rem;
      flex-direction: column;
      row-gap: 1rem;

      .copy {
        flex-direction: column;
        row-gap: 1rem;

        article {
          padding: 0.25rem;
          font-size: 0.75rem;

          .highlight {
            font-weight: 600;
            color: #689ed0;
          }
        }

        #first {
          display: inline-block;
        }
        #last {
          font-size: 3rem;
        }
        #dot {
          font-size: 3rem;
        }
        #hi {
          font-size: 1rem;
        }
      }

      .profile {
        min-width: 200px;
        height: 200px;
      }
    }
  }

  //320px — 480px: Mobile devices
  @media screen and (max-width: 850px) and (orientation: landscape) {
    height: auto;
    padding: 0 2.5rem;
    z-index: 20;

    .content {
      margin-top: 1rem;
      //flex-direction: column;
      row-gap: 1rem;

      .copy {
        flex-direction: column;
        row-gap: 1rem;

        article {
          padding: 0.25rem;
          font-size: 0.75rem;

          .highlight {
            font-weight: 600;
            color: #689ed0;
          }
        }

        #first {
          display: inline-block;
        }
        #last {
          font-size: 3rem;
        }
        #dot {
          font-size: 3rem;
        }
        #hi {
          font-size: 1rem;
        }
      }

      .profile {
        min-width: 200px;
        height: 200px;
      }
    }
  }

  //481px — 768px: iPads, Tablets
  @media screen and (min-width: 481px) and (max-width: 769px) and (orientation: portrait) {
  }
  //481px — 768px: iPads, Tablets
  //@media screen and (min-width: 481px) and (max-width: 769px) and (orientation: landscape) {}
  //769px — 1024px: Small screens, laptops
  //@media screen and (min-width: 769px) and (max-width: 1024px) and (orientation: portrait) {}
  //769px — 1024px: Small screens, laptops
  //@media screen and (min-width: 769px) and (max-width: 1024px) and (orientation: landscape) {}
  //1025px — 1200px: Desktops, large screens
  @media screen and (min-width: 1024px) and (max-width: 1200px) and (orientation: portrait) {
  }
  //1025px — 1200px: Desktops, large screens
  //@media screen and (min-width: 1024px) and (max-width: 1200px) and (orientation: landscape) {}
  //1201px and more —  Extra large screens, TV
  //@media screen and (min-width: 1201px) and (max-width: 1500px) and (orientation: portrait) {}
  //1201px and more —  Extra large screens, TV
  //@media screen and (min-width: 1201px) and (max-width: 1500px) and (orientation: landscape) {}
  //1501px and more —  Extra large screens, TV
  //@media screen and (min-width: 1501px) and (orientation: portrait) {}
  //1501px and more —  Extra large screens, TV
  @media screen and (min-width: 1921px) and (orientation: landscape) {
  }
`;

export default About;
