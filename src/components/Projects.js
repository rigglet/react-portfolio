import { useState } from "react";
//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
//uuid
import { v4 as uuidv4 } from "uuid";
//components
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import { useLocation, useHistory } from "react-router-dom";

const Projects = ({ projects }) => {
  const location = useLocation();
  const history = useHistory();
  let pathId = location.pathname.split("/")[2];

  //state
  const [currentImage, setCurrentImage] = useState();
  const [showProjectDetails, setShowProjectDetails] = useState(false);

  const handleImageChange = (image) => {
    setCurrentImage(image);
  };

  const projectClose = () => {
    document.body.style.overflowY = "auto";
    history.push("/portfolio");
  };

  const skipProject = (direction) => {
    // const pos = projects.findIndex((project) => String(project.id) === pathId);
    // if (direction === "FORWARD") {
    //   setCurrentImage(getImage(projects[(pos + 1) % projects.length].mainImg));
    //   history.push(`/portfolio/${projects[(pos + 1) % projects.length].id}`);
    // }
    // if (direction === "BACK") {
    //   if ((pos - 1) % projects.length === -1) {
    //     setCurrentImage(getImage(projects[projects.length - 1].mainImg));
    //     history.push(`/portfolio/${projects[projects.length - 1].id}`);
    //     return;
    //   }
    //   setCurrentImage(getImage(projects[(pos - 1) % projects.length].mainImg));
    //   history.push(`/portfolio/${projects[(pos - 1) % projects.length].id}`);
    // }
  };

  return (
    <StyledProjects>
      {showProjectDetails && (
        <ProjectDetail
          projectClose={projectClose}
          skipProject={skipProject}
          pathId={pathId}
          arrSize={projects.length}
          currentImage={currentImage}
          handleImageChange={handleImageChange}
          setCurrentImage={setCurrentImage}
        />
      )}

      {projects.map((project) => (
        <ProjectCard
          key={uuidv4()}
          project={project}
          setShowProjectDetails={setShowProjectDetails}
        />
      ))}
    </StyledProjects>
  );
};

const StyledProjects = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  //overflow-x: scroll;
  //flex-wrap: wrap;
`;

export default Projects;
