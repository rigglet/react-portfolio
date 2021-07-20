import { useState, useEffect } from "react";

//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import StyledLine from "../styles/styledLine";

//components
import Projects from "../components/Projects";
import Loader from "../components/Loader";
//data
import { getCollection } from "../api/api";
import { buttonVariants } from "../styles/animations";

const Portfolio = () => {
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
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredProjects = projects?.filter((project) => {
    return project.featured === true && project.included === true;
  });

  return (
    <PortfolioSection className="section-dark fullheight" id="portfolio">
      <div className="container-dark">
        <div className="content">
          <div className="header">
            <h1 className="section-heading heading-light">Featured Projects</h1>
            <StyledLine height="6px" width="100%" bgColor="#111111" />
          </div>
          {loading ? (
            <Loader />
          ) : (
            <div className="projects">
              {filteredProjects.length > 0 ? (
                <Projects projects={filteredProjects} />
              ) : (
                <h1 className="noresult">No projects to show.</h1>
              )}
            </div>
          )}
          <motion.button
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Full Portfolio
          </motion.button>
        </div>
      </div>
    </PortfolioSection>
  );
};

const PortfolioSection = styled(motion.div)`
  .content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
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
