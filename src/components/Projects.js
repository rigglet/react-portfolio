import { useState } from "react";
//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
//components
import Project from "./Project";
import ProjectDetail from "./ProjectDetail";
import { useLocation, useHistory } from "react-router-dom";
import { getImage } from "../util";

const Projects = ({ projects }) => {
  const location = useLocation();
  const history = useHistory();
  let pathId = location.pathname.split("/")[2];

  //state
  const [currentImage, setCurrentImage] = useState();

  const handleImageChange = (image) => {
    setCurrentImage(image);
  };

  const projectClose = () => {
    history.push("/portfolio");
  };

  const skipProject = (direction) => {
    const pos = projects.findIndex((project) => String(project.id) === pathId);
    if (direction === "FORWARD") {
      setCurrentImage(getImage(projects[(pos + 1) % projects.length].mainImg));
      history.push(`/portfolio/${projects[(pos + 1) % projects.length].id}`);
    }
    if (direction === "BACK") {
      if ((pos - 1) % projects.length === -1) {
        setCurrentImage(getImage(projects[projects.length - 1].mainImg));
        history.push(`/portfolio/${projects[projects.length - 1].id}`);
        return;
      }
      setCurrentImage(getImage(projects[(pos - 1) % projects.length].mainImg));
      history.push(`/portfolio/${projects[(pos - 1) % projects.length].id}`);
    }
  };

  return (
    <StyledProjects>
      {pathId && (
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  column-gap: 2rem;
  row-gap: 4rem;
`;

export default Projects;
