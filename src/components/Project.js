//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
//uuid
import { v4 as uuidv4 } from "uuid";
//Link
import { Link } from "react-router-dom";

//functions
import Icon from "../components/Icon";
import { productionBaseURL as serverBaseURL } from "../config/config";

const Project = ({ project }) => {
  console.log(project);
  // const enterDetails = () => {
  //   document.body.style.overflowY = "hidden";
  // };

  return (
    <StyledCard
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/portfolio/${project._id}`}>
        <img
          src={`${serverBaseURL()}/images/${project.screenshots[0]?.fileName}`}
          alt="project"
          //onClick={() => enterDetails()}
        />
      </Link>

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
              color="whitesmoke"
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
            <Icon key={uuidv4()} icon="HiLink" color="whitesmoke" size="30px" />
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
            <Icon key={uuidv4()} icon={tech.icon} color="#313131" size="25px" />
          </a>
        ))}
      </StyledIcons>
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  max-width: 300px;
  background-color: whitesmoke;
  border-radius: 0 0 20px 20px;

  img {
    cursor: pointer;
    width: 100%;
    //min-height: 25vh;
    object-fit: scale-down;
    object-position: top;
  }

  .links {
    background-color: #313131;
    background: #65617d;
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
      font-size: 14pt;
      font-weight: 500;
      //text-decoration: none;
      &:visited,
      &:active {
        text-decoration: none;
      }
    }
    .project-description {
      /* min-height: 20vh; */
      text-decoration: none;
      &:visited,
      &:active {
        text-decoration: none;
      }
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

export default Project;
