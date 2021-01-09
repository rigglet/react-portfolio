import { useState } from "react";

//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
//components
import Projects from "../components/Projects";
//data
import { technologies, projectData } from "../Data";
import { FaFilter } from "react-icons/fa";

const Portfolio = () => {
  //state
  const [projects, setProjects] = useState(projectData());
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
    if (tech === "ALL") {
      return [...p];
    } else {
      return p.filter((proj) => proj.technologies.includes(tech));
    }
    // switch (tech) {
    //   case "REACT":
    //
    //   //console.log("JS");
    //   case "ALL":
    //     return [...p];
    //   default:
    //     return [...p];
    // }
  };

  return (
    <PortfolioLayout>
      <div className="titleBar">
        <h1>Projects</h1>
        <div className="options">
          <FaFilter className="filter" />
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
              <option value={tech} key={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Projects projects={filterProjects()} />
    </PortfolioLayout>
  );
};

const PortfolioLayout = styled(motion.div)`
  padding: 2rem;
  overflow-y: hidden;
  .titleBar {
    display: flex;
    justify-content: space-between;
  }
`;

export default Portfolio;
