import { useState, useEffect } from "react";

//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import StyledLine from "../styles/styledLine";
import {
  fadeInOut,
  elementSlideInOut,
  projectsSlideInOutLeft,
} from "../styles/animations";

//components
import Projects from "../components/Projects";
import Loader from "../components/Loader";
import Icon from "../components/Icon";
//data
import { getCollection } from "../api/api";
import { buttonVariants } from "../styles/animations";

const Portfolio = ({ portfolioRef, portfolioControls }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProjects() {
      return await getCollection("projects");
    }

    getProjects()
      .then((results) => {
        if (results.status === 200) {
          setProjects(results.data);
        }
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredProjects = projects?.filter((project) => {
    return project.featured === true && project.included === true;
  });

  return (
    <PortfolioSection ref={portfolioRef}>
      <div className="section-header">
        <div className="section-title-content">
          <Icon
            icon="MdWeb"
            size="30px"
            color="whitesmoke"
            title="Projects icon"
          />
          <h1 className="section-heading heading-light">Featured Projects</h1>
        </div>
        <StyledLine height="6px" width="25%" bgColor="#111111" />
      </div>
      <div className="content">
        {loading ? (
          <>
            <Loader />
          </>
        ) : (
          <>
            <div className="projects">
              {filteredProjects.length > 0 ? (
                <Projects projects={filteredProjects} />
              ) : (
                <h1 className="noresult">No projects to show.</h1>
              )}
            </div>
            <motion.button
              className="page-btn dark-btn"
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Full Portfolio
            </motion.button>
          </>
        )}
      </div>
    </PortfolioSection>
  );
};

const PortfolioSection = styled(motion.div)`
  //added to center styledLine
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //added to center styledLine

  padding: 4rem 4rem 4rem 4rem;
  min-height: 93vh;
  height: auto;
  width: 100%;

  .content {
    height: 100%;
    height: auto;
    min-height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .projects {
    width: 100%;
  }
  .noresult {
    padding-top: 1rem;
    color: var(--color-light-text);
    text-align: center;
    font-weight: lighter;
  }

  //#### RESPONSIVE SECTION ####
  //320px — 480px: Mobile devices
  @media screen and (max-width: 480px) and (orientation: portrait) {
    /* //added to center styledLine
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //added to center styledLine

    padding: 4rem 4rem 4rem 4rem;
    min-height: 93vh;
    height: auto;
    width: 100%;

    .content {
      height: 100%;
      height: auto;
      min-height: 80vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    .projects {
      width: 100%;
    }
    .noresult {
      padding-top: 1rem;
      color: var(--color-light-text);
      text-align: center;
      font-weight: lighter;
    } */
  }
  //320px — 480px: Mobile devices
  @media screen and (max-width: 850px) and (orientation: landscape) {
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

export default Portfolio;
