//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
//uuid
import { v4 as uuidv4 } from "uuid";
//Link
import { Link } from "react-router-dom";

//functions
import Icon from "./Icon";
import { serverBaseURL } from "../config/config";

const ProjectCard = ({ project, handleProjectClick }) => {
  //console.log(project);

  return (
    <StyledCard
    // initial={{ scale: 0.6 }}
    // animate={{ scale: 1 }}
    // transition={{ duration: 0.5 }}
    >
      <div className="image-container">
        <div className="overlay" onClick={() => handleProjectClick(project)}>
          {/* <h2>More details...</h2> */}
          <h2>project details</h2>
          <Icon key={uuidv4()} icon="MdUnfoldMore" color="white" size="50px" />
        </div>
        <img
          src={`${serverBaseURL()}/images/${project.screenshots[0]?.fileName}`}
          alt="project"
        />
        {/* <Link to={`/portfolio/${project._id}`}> </Link> */}
      </div>

      <div className="links">
        <div className="icon">
          <a
            key={uuidv4()}
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
          >
            <button className="page-btn project-card-link-btn">
              <Icon
                key={uuidv4()}
                icon="FaGithubSquare"
                color="#689ed0"
                size="25px"
                title="Open project in github"
              />
              View code
            </button>
          </a>
        </div>
        <div className="icon">
          <a
            key={uuidv4()}
            href={project.website}
            target="_blank"
            rel="noreferrer"
          >
            <button className="page-btn project-card-link-btn">
              <Icon
                key={uuidv4()}
                icon="HiLink"
                color="689ed0"
                size="25px"
                title="Open live project website"
              />
              View live
            </button>
          </a>
        </div>
      </div>

      <div className="information">
        <h4 className="project-name">{project.projectName}</h4>
        <h5 className="project-description">{project.shortDescription}</h5>
      </div>

      {/* <Line /> */}

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
              size="30px"
            />
          </a>
        ))}
      </StyledIcons>
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  max-width: 300px;
  //margin: 2rem;
  background-color: whitesmoke;
  background-color: transparent;
  border-radius: 10px;
  //box-shadow: 0px 5px 20px rgba(101, 97, 125, 1);
  //box-shadow: 0px 0px 150px rgba(101, 97, 125, 1);
  border-bottom: 1px solid #689ed0;

  .image-container {
    border-radius: 10px;
    min-height: 175px;
    position: relative;
    margin-bottom: 1rem;

    .overlay {
      color: var(--color-light-text);
      border-radius: 10px;
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
      border-radius: 10px;
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
    background: transparent;
    display: flex;
    //border-bottom: 1px solid #313131;
    //border-top: 1px solid #313131;
    //border-bottom: 1px solid #689ed0;
    //border-radius: 10px;
    //border-top: 1px solid whitesmoke;
    align-items: center;
    justify-content: space-evenly;

    .project-card-link-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 1rem;
      max-width: 200px;
      background: transparent;
      border-width: 1px;
      padding: 0.5rem;
      font-weight: 100;
      font-size: 10pt;
      text-transform: none;
      &:hover {
        box-shadow: none;
        color: black;
        background: #689ed0;
      }
    }

    .icon {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 0.25rem;
      a {
        text-decoration: none;
      }
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
      margin-top: 1rem;
      padding: 0.5rem;
      color: whitesmoke;
      font-size: 14pt;
      font-weight: 500;
    }

    .project-description {
      padding: 1rem;
      color: whitesmoke;
      font-size: 12pt;
      font-weight: 300;
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
  gap: 0.5rem;
  padding: 1rem 0.5rem;
`;

export default ProjectCard;
