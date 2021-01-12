//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
//components
import Project from "./Project";
import ProjectDetail from "./ProjectDetail";
import { useLocation, useHistory } from "react-router-dom";

const Projects = ({ projects }) => {
  const location = useLocation();
  const history = useHistory();
  let pathId = location.pathname.split("/")[2];

  const projectClose = () => {
    history.push("/portfolio");
  };
  const skipProject = (direction) => {
    const pos = projects.findIndex((project) => String(project.id) === pathId);
    if (direction === "FORWARD") {
      history.push(`/portfolio/${projects[(pos + 1) % projects.length].id}`);
    }
    if (direction === "BACK") {
      if ((pos - 1) % projects.length === -1) {
        history.push(`/portfolio/${projects[projects.length - 1].id}`);
        return;
      }
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
  //column-gap: 0.5rem;
  row-gap: 4rem;
`;

export default Projects;
