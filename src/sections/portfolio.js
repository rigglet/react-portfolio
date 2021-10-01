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
        <StyledLine height="6px" width="100%" bgColor="#111111" />
      </div>
      <div className="content">
        {loading ? (
          <div className="loading">
            <Loader />
          </div>
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
  z-index: 10;
  //padding-top: 7vh;
  min-height: 93vh;
  height: auto;
  width: 100%;
  overflow-y: unset;
  //border: 1px solid teal;

  .content {
    height: 100%;
    min-height: 85vh;
    max-height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    //border: 1px solid blue;
  }
  .loading {
    min-height: 93vh;
    max-height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
  }
  .projects {
    width: 100%;
  }
  .noresult {
    text-align: center;
    font-weight: lighter;
  }
`;

export default Portfolio;
