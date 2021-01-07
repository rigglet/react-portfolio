//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
//images
import splashImage from "../img/me-bw-blue-tie.png";
//components
import ContactIconBar from "../components/ContactIconBar";

const Splash = () => {
  return (
    <SplashLayout>
      <StyledInfo>
        <StyledHeader>
          <h2>Front End</h2>
          <h1>
            Web <span>Developer</span>
          </h1>
        </StyledHeader>
        <StyledSubHeader>
          <h2>Passionate about web development</h2>
          <h2>With a focus on React</h2>
          <h2>Hire me today</h2>
        </StyledSubHeader>
        <button>View Portfolio</button>
        <ContactIconBar />
      </StyledInfo>
      <StyledImage>
        <img src={splashImage} alt="Me" />
      </StyledImage>
    </SplashLayout>
  );
};

const SplashLayout = styled(motion.div)`
  /* position: absolute;
  top: 7%;
  left: 0; */
  display: flex;
  justify-content: space-between;
  overflow-y: hidden;
`;

const StyledInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4rem 0rem 2rem 8rem;
  button {
    width: 20vw;
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
  padding-right: 6rem;
  img {
    min-width: 100%;
    height: 100%;
  }
`;

export default Splash;
