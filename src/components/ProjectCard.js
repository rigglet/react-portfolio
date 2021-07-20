//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
//uuid
import { v4 as uuidv4 } from "uuid";
//Link
import { Link } from "react-router-dom";

//functions
import Icon from "./Icon";
import { productionBaseURL as serverBaseURL } from "../config/config";

const ProjectCard = ({ project, handleProjectClick }) => {
  //console.log(project);

  return (
    <StyledCard
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="image-container">
        <div
          className="overlay"
          onClick={() => handleProjectClick(project._id)}
        >
          {/* <h2>More details...</h2> */}
          <h2>Click for details...</h2>
          <Icon
            key={uuidv4()}
            icon="MdUnfoldMore"
            color="white"
            size="100px"
            className="cs"
          />
        </div>

        <Link to={`/portfolio/${project._id}`}>
          <img
            src={`${serverBaseURL()}/images/${
              project.screenshots[0]?.fileName
            }`}
            alt="project"
          />
        </Link>
      </div>

      <div className="links">
        <div className="icon">
          <a
            key={uuidv4()}
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              key={uuidv4()}
              icon="FaGithubSquare"
              color="#65617d"
              size="30px"
              className="cs"
            />
          </a>
        </div>
        <div className="icon">
          <a
            key={uuidv4()}
            href={project.website}
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              key={uuidv4()}
              icon="HiLink"
              color="rgb(101, 97, 125)"
              size="30px"
            />
          </a>
        </div>
      </div>

      <div className="information">
        <h4 className="project-name">{project.projectName}</h4>
        <p className="project-description">{project.shortDescription}</p>
      </div>

      <Line />

      <StyledIcons>
        {project.technologies.map((tech) => (
          <a
            key={uuidv4()}
            href={tech.address}
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              key={uuidv4()}
              icon={tech.icon}
              color={tech.color}
              size="25px"
            />
          </a>
        ))}
      </StyledIcons>
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  max-width: 400px;
  margin: 2rem;
  background-color: whitesmoke;
  border-radius: 0 0 8px 8px;
  //box-shadow: 0px 5px 20px rgba(101, 97, 125, 1);
  //box-shadow: 0px 0px 150px rgba(101, 97, 125, 1);

  .image-container {
    border-radius: 8px 8px 0 0;
    position: relative;
    max-height: 100%;
    .overlay {
      border-radius: 8px 8px 0 0;
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(101, 97, 125, 75%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      opacity: 0;
      transition: 0.5s ease-in-out;
    }
    .overlay:hover {
      opacity: 100;
      transition: 0.5s ease-in-out;
    }

    img {
      border-radius: 8px 8px 0 0;
      cursor: pointer;
      width: 100%;
      //min-height: 25vh;
      object-fit: scale-down;
      object-position: top;
    }
  }

  .links {
    background-color: #313131;
    background: #65617d;
    background: whitesmoke;
    display: flex;
    border-bottom: 1px solid #313131;
    border-top: 1px solid #313131;
    border-bottom: 1px solid whitesmoke;
    border-top: 1px solid whitesmoke;
    align-items: center;
    justify-content: space-evenly;

    .icon {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 0.25rem;
    }
    .icon:hover {
      color: #666666;
    }
    .icon:nth-of-type(1) {
      //border-right: 1px solid whitesmoke;
    }
  }

  .information {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    color: #313131;

    .project-name {
      padding: 0.5rem;
      font-size: 14pt;
      font-weight: 500;
      //text-decoration: none;
      /* &:visited,
      &:active {
        text-decoration: none;
      } */
    }
    .project-description {
      padding: 1rem;
      /* min-height: 20vh; */
      text-decoration: none;
      /* &:visited,
      &:active {
        text-decoration: none;
      } */
    }
  }
`;

const Line = styled(motion.div)`
  width: 100%;
  height: 1px;
  background: #689ed0;
`;

const StyledIcons = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 1rem;
`;

export default ProjectCard;
