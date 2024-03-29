//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
//images
import codingImage from "../img/coding_screens.svg";
import useScroll from "../components/useScroll";
//animations
import {
  headerVariants,
  subheaderVariants,
  buttonVariants,
  imageVariants,
} from "../styles/animations";

const Home = ({ homeRef }) => {
  const [element, controls] = useScroll();
  return (
    <HomeSection
      id="home"
      className="section-dark fullheight"
      // variants={homeVariants}
      // initial="initial"
      // animate="animate"
      //exit="exit"
      ref={element}
    >
      <div className="container-dark">
        <div className="content" ref={homeRef}>
          <StyledInfo>
            <StyledHeader
              variants={headerVariants}
              initial="initial"
              //animate="animate"
              animate={controls}
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
              //animate="animate"
              animate={controls}
            >
              <h2>Passionate about web development</h2>
              <h2>With a focus on React</h2>
              <h2>Hire me today</h2>
            </StyledSubHeader>
            <HashLink smooth to="/#portfolio">
              <motion.button
                className="page-btn dark-btn"
                variants={buttonVariants}
                initial="initial"
                //animate="animate"
                animate={controls}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.button>
            </HashLink>
            {/* <Link to="/home#portfolio"></Link> */}
          </StyledInfo>
          <StyledImage
            variants={imageVariants}
            initial="initial"
            //animate="animate"
            animate={controls}
            exit="exit"
          >
            <img src={codingImage} alt="Coding" />
          </StyledImage>
        </div>
      </div>
    </HomeSection>
  );
};

const HomeSection = styled(motion.div)`
  .content {
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    padding: 4rem;
  }
`;

const StyledInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50vw;
    height: auto;
  }
`;

export default Home;
