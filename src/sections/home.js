//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
//images
import codingImage from "../img/coding_screens.svg";
//animations
import {
  headerVariants,
  subheaderVariants,
  buttonVariants,
  imageVariants,
} from "../styles/animations";

const Home = ({ homeRef, homeControls }) => {
  return (
    <HomeSection ref={homeRef}>
      <div className="info">
        <motion.div
          className="home-header"
          variants={headerVariants}
          initial="initial"
          //animate="animate"
          animate={homeControls}
        >
          <h2 className="lighter">I am a</h2>
          <h2>Front End</h2>
          <h1>
            Web <span>Developer</span>
          </h1>
        </motion.div>
        <motion.div
          className="home-sub-header"
          variants={subheaderVariants}
          initial="initial"
          //animate="animate"
          animate={homeControls}
        >
          <h2>Passionate about web development</h2>
          <h2>With a focus on React</h2>
          <h2>Hire me today</h2>
        </motion.div>
        <HashLink smooth to="/#portfolio">
          <motion.button
            className="page-btn dark-btn"
            variants={buttonVariants}
            initial="initial"
            //animate="animate"
            animate={homeControls}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Portfolio
          </motion.button>
        </HashLink>
      </div>
      <motion.div
        className="image"
        variants={imageVariants}
        initial="initial"
        //animate="animate"
        animate={homeControls}
        exit="exit"
      >
        <img src={codingImage} alt="Coding" />
      </motion.div>
    </HomeSection>
  );
};

const HomeSection = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  width: 100%;
  padding: 4rem;

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .home-header {
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
    }
    .home-sub-header {
      h2 {
        font-size: 2rem;
        color: #c6c6c6;
        font-weight: lighter;
        line-height: 3rem;
      }
    }
  }

  .image {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 50vw;
      height: auto;
    }
  }

  //#### RESPONSIVE SECTION ####
  //320px — 480px: Mobile devices
  @media screen and (max-width: 480px) and (orientation: portrait) {
    min-height: 0;
    height: 100vh;
    padding: 20vh 2rem 2rem 2rem;
    overflow-y: hidden;

    .info {
      .home-header {
        h1 {
          font-size: 3rem;
        }
        h2 {
          font-size: 2.5rem;
        }
        .lighter {
          font-size: 2rem;
          font-weight: lighter;
          line-height: 3rem;
        }
      }
      .home-sub-header {
        h2 {
          font-size: 1.6rem;
          line-height: 2rem;
        }
      }
    }

    .image {
      display: none;
    }
  }
  //320px — 480px: Mobile devices
  @media screen and (max-width: 850px) and (orientation: landscape) {
    min-height: 0;
    height: 100vh;
    height: auto;
    padding: 20vh 2rem 2rem 2rem;
    //overflow-y: hidden;

    .info {
      .home-header {
        h1 {
          font-size: 3rem;
        }
        h2 {
          font-size: 2.5rem;
        }
        .lighter {
          font-size: 2rem;
          font-weight: lighter;
          line-height: 3rem;
        }
      }
      .home-sub-header {
        h2 {
          font-size: 1.6rem;
          line-height: 2rem;
        }
      }
    }

    .image {
      display: none;
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

export default Home;
