import { useState } from "react";

//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
//components
import Projects from "../components/Projects";
//data
import { technologies, projectData } from "../Data";
//import { FaFilter } from "react-icons/fa";

const Portfolio = () => {
  //state
  const projects = projectData();
  const [type, setType] = useState("All");
  const [tech, setTech] = useState("ALL");
  const allTech = technologies();

  const handleTypeChange = (e) => {
    //console.log(e.target.value);
    setType(e.target.value);
  };
  const handleTechChange = (e) => {
    //console.log(e.target.value);
    setTech(e.target.value);
  };

  const filterByType = () => {
    switch (type) {
      case "featured":
        return projects.filter((project) => project.featured === true);
      case "all":
        return [...projects];
      default:
        return [...projects];
    }
  };

  const filterProjects = () => {
    const p = filterByType();
    //console.log(tech);
    if (tech === "ALL") {
      return [...p];
    } else {
      return p.filter((proj) => proj.technologies.includes(tech));
    }
  };
  //console.log(allTech);
  return (
    <PortfolioLayout>
      <div className="titleBar">
        <h1>Projects</h1>
        <div className="options">
          <h4>Total displayed: {filterProjects().length} </h4>
          {/* <FaFilter className="filter" /> */}
          {/* <label class="switch">
          <input type="checkbox" onChange={handleTypeChange} />
          <span class="slider round"></span>
        </label> */}
          <select onChange={handleTypeChange} value={type}>
            <option key="all" value="all">
              All
            </option>
            <option key="featured" value="featured">
              Featured
            </option>
          </select>
          <select onChange={handleTechChange} value={tech}>
            <option value="ALL">ALL</option>
            {allTech.map((tech) => (
              <option value={tech.name} key={tech.name}>
                {tech.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {filterProjects().length > 0 ? (
        <Projects projects={filterProjects()} />
      ) : (
        <h1 className="nores">No results to show.</h1>
      )}
    </PortfolioLayout>
  );
};

const PortfolioLayout = styled(motion.div)`
  overflow-x: hidden;
  padding-bottom: 2rem;
  .titleBar {
    display: flex;
    justify-content: space-between;
    padding: 2rem 2rem 0rem 2rem;
    h1 {
      font-weight: lighter;
      font-size: 2rem;
    }
  }
  .options {
    display: flex;
    align-items: center;
    h4 {
      font-weight: lighter;
    }
  }
  .nores {
    text-align: center;
    padding: 1rem;
    margin-top: 2rem;
    font-weight: lighter;
  }
`;

export default Portfolio;
