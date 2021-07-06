import { Link } from "react-router-dom";
//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
//images
//import splashImage from "../img/me-bw-blue-tie.png";
import codingImage from "../img/coding_screens.svg";
//import codingImage from "./coding_screens.js";
//components
//import ContactIconBar from "../components/ContactIconBar";
//animations
import {
  homeVariants,
  headerVariants,
  subheaderVariants,
  buttonVariants,
  imageVariants,
} from "../styles/animations";

const Home = () => {
  return (
    <HomeSection
      id="home"
      className="section fullheight section-dark"
      variants={homeVariants}
      initial="initial"
      animate="animate"
      //exit="exit"
    >
      <div className="container">
        <StyledInfo>
          <StyledHeader
            variants={headerVariants}
            initial="initial"
            animate="animate"
          >
            <h2 className="lighter">I am a</h2>
            <h2>Front End</h2>
            <h1>
              Web <span>Developer</span>
            </h1>
          </StyledHeader>
          <StyledSubHeader
            variants={subheaderVariants}
            initial="initial"
            animate="animate"
          >
            <h2>Passionate about web development</h2>
            <h2>With a focus on React</h2>
            <h2>Hire me today</h2>
          </StyledSubHeader>
          <Link to="/portfolio/">
            <motion.button
              variants={buttonVariants}
              initial="initial"
              animate="animate"
            >
              View Portfolio
            </motion.button>
          </Link>
          {/* <ContactIconBar
          size="40px"
        /> */}
        </StyledInfo>
        <StyledImage
          variants={imageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <img src={codingImage} alt="Coding" />
        </StyledImage>
      </div>
    </HomeSection>
  );
};

const HomeSection = styled(motion.div)`
  .container {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
`;

const StyledInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4rem 0rem 2rem 8rem;
  button {
    //width: 20vw;
  }
`;

const StyledHeader = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-content: center;
  h1 {
    font-size: 3rem;
    color: #c6c6c6;
  }
  h2 {
    font-size: 2.5rem;
    color: #c6c6c6;
  }
  .lighter {
    font-size: 2rem;
    color: #c6c6c6;
    font-weight: lighter;
    line-height: 3rem;
  }
  span {
    color: #689ed0;
  }
`;

const StyledSubHeader = styled(motion.div)`
  h2 {
    font-size: 2rem;
    color: #c6c6c6;
    font-weight: lighter;
    line-height: 3rem;
  }
`;

const StyledImage = styled(motion.div)`
  //border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50vw;
    height: auto;
  }
`;

export default Home;
