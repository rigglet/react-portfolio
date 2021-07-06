import { useState, useEffect } from "react";

//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
//components
import Projects from "../components/Projects";
//data
import { getCollection } from "../api/api";
import { buttonVariants } from "../styles/animations";
import { HashLink } from "react-router-hash-link";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

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
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredProjects = projects?.filter((project) => {
    return project.featured === true && project.included === true;
  });

  return (
    <PortfolioSection
      className="section extraheight section-dark"
      id="portfolio"
    >
      {/* <div className="gradientLeft" /> */}

      <div className="container">
        <h1 className="section-heading">Featured Projects</h1>
        <div className="projects">
          {filteredProjects.length > 0 ? (
            <Projects projects={filteredProjects} />
          ) : (
            <h1 className="noresult">Just working on it...</h1>
          )}
        </div>
        <motion.button
          variants={buttonVariants}
          initial="initial"
          animate="animate"
        >
          Explore Full Portfolio
        </motion.button>
      </div>
    </PortfolioSection>
  );
};

const PortfolioSection = styled(motion.div)`
  //display: flex;
  //position: relative;
  .container {
    height: 100%;
    background: #111111;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    .projects {
      width: 100%;
    }
    .noresult {
      text-align: center;
      font-weight: lighter;
    }
  }
`;

export default Portfolio;
