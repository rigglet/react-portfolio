import { useState } from "react";
//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import { detailPopUp } from "../styles/animations";
import useScroll from "../components/useScroll";
//uuid
import { v4 as uuidv4 } from "uuid";
//components
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import { useHistory } from "react-router-dom";

const Projects = ({ projects }) => {
  const [element, controls] = useScroll();
  const history = useHistory();

  //state
  const [currentProject, setCurrentProject] = useState({});
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  //const [currentImage, setCurrentImage] = useState(null);

  const handleProjectClick = (project) => {
    document.body.style.overflowY = "hidden";
    setShowProjectDetails(true);
    setCurrentProject(project);
    //console.log(project);
  };

  // const handleImageChange = (image) => {
  //   console.log(image);
  //   setCurrentImage(image);
  // };

  const projectClose = () => {
    document.body.style.overflowY = "auto";
    history.push("/#portfolio");
  };

  return (
    <StyledProjects>
      {showProjectDetails && (
        <ProjectDetail
          project={currentProject}
          projectClose={projectClose}
          //skipProject={skipProject}
          //arrSize={projects.length}
          //currentImage={currentImage}
          //handleImageChange={handleImageChange}
          //setCurrentImage={setCurrentImage}
        />
      )}

      {projects.map((project) => (
        <ProjectCard
          key={uuidv4()}
          project={project}
          handleProjectClick={handleProjectClick}
        />
      ))}
    </StyledProjects>
  );
};

const StyledProjects = styled(motion.div)`
  width: 100%;
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-around;
  row-gap: 4rem;
  column-gap: 2rem;
  //gap: 10rem;
  flex-wrap: wrap;
  //overflow-x: scroll;
`;

export default Projects;
