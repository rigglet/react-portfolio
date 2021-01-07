//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
//components
import Project from "./Project";
//project data
import { projectData } from "../Data";
//images
//import sudoku from "../img/sudoku.png";

const Projects = () => {
  const data = projectData();
  console.log(data);
  return (
    <StyledProjects>
      {data.map((project) => (
        <Project
          key={project.id}
          id={project.id}
          name={project.projectName}
          shortDescription={project.shortDescription}
          technologies={project.technologies}
          mainImg={project.mainImg}
        />
      ))}
    </StyledProjects>
  );
};

const StyledProjects = styled(motion.div)`
  width: 100vw;
  margin-top: 3rem;
  /* display: flex;
flex-wrap: wrap;
justify-content: center; */
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  column-gap: 0.5rem;
  row-gap: 4rem;
`;

export default Projects;
