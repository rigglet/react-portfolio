import { useEffect, useState } from "react";
//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";
import { getDocumentById } from "../api/api";
import Icon from "./Icon";
//uuid
import { v4 as uuidv4 } from "uuid";
import { productionBaseURL as serverBaseURL } from "../config/config";
//functions
import CloseButton from "./closeButton";

const ProjectDetails = ({
  projectClose,
  skipProject,
  arrSize,
  handleImageChange,
  currentImage,
  projectId,
}) => {
  //const project = getProject(projectId);
  const [project, setProject] = useState({});

  useEffect(() => {
    async function getProject() {
      return await getDocumentById("projects", projectId);
    }

    getProject().then((results) => {
      console.log(results);
      if (results.status === 200) {
        setProject(results.data);
        currentImage = results.data.screenshots.filter(
          (image) => image._id === results.data.mainImage
        )[0];
        // if (
        //   results.data.mainImage !== null &&
        //   results.data.mainImage !== undefined
        // ) {
        //   // console.log(
        //   //   results.data.screenshots.filter(
        //   //     (image) => image._id === results.data.mainImage
        //   //   )[0]
        //   // );
        // }
      }
    });
  }, []);

  return (
    <StyledDetail>
      <StyledCard>
        <CloseButton closeFunction={projectClose} />
        <StyledHeaderSection>
          <h2>{project.projectName}</h2>
          <StyledHeaderIcons>
            <StyledLinks>
              <a href={project.website} target="_blank" rel="noreferrer">
                {
                  <Icon
                    key={uuidv4()}
                    icon="HiLink"
                    color="#313131"
                    size="25px"
                  />
                }
              </a>
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                {
                  <Icon
                    key={uuidv4()}
                    icon="FaGithubSquare"
                    color="#313131"
                    size="25px"
                  />
                }
              </a>
            </StyledLinks>
            {project.featured ? (
              <Icon key={uuidv4()} icon="FaStar" color="#313131" size="25px" />
            ) : (
              <Icon
                key={uuidv4()}
                icon="FaRegStar"
                color="#313131"
                size="25px"
              />
            )}
          </StyledHeaderIcons>
        </StyledHeaderSection>

        <StyledMain>
          <div className="left">
            <p>{project.projectDescription}</p>

            <StyledIcons>
              {project.technologies?.map((tech) => (
                <Icon
                  key={uuidv4()}
                  icon={tech.icon}
                  color={tech.color}
                  size="25px"
                />
              ))}
            </StyledIcons>
          </div>

          <div className="middle">
            {project.screenshots?.map((shot) => (
              <img
                key={uuidv4()}
                src={`${serverBaseURL()}/images/${shot.fileName}`}
                alt={shot.description}
                onClick={() => handleImageChange(shot.fileName)}
              />
            ))}
          </div>

          <div className="right">
            {/* {project?.mainImage && (
              <img
                src={`${serverBaseURL()}/images/${project?.mainImage}`}
                alt="project"
              />
            )} */}
          </div>
        </StyledMain>

        <StyledLeftSection>
          {arrSize > 1 && (
            <Icon
              key={uuidv4()}
              icon="FaAngleLeft"
              color="#313131"
              size="25px"
              className="arrow"
              onClick={() => {
                skipProject("BACK");
              }}
            />
          )}
        </StyledLeftSection>

        <StyledRightSection>
          {arrSize > 1 && (
            <Icon
              key={uuidv4()}
              icon="FaAngleRight"
              color="#313131"
              size="25px"
              className="arrow"
              onClick={() => {
                skipProject("FORWARD");
              }}
            />
          )}
        </StyledRightSection>
      </StyledCard>
    </StyledDetail>
  );
};

const StyledDetail = styled(motion.div)`
  z-index: 12;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(256, 256, 256, 0.5);
`;

const StyledCard = styled(motion.div)`
  display: grid;
  grid-template-columns: 5% auto 5%;
  grid-template-rows: 20% 5% auto;
  grid-template-areas:
    "left-side header right-side"
    "left-side line right-side"
    "left-side main right-side";

  //box-shadow: 0px 5px 20px rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 10;
  width: 95vw;
  min-height: 95vh;
  height: auto;
  border: 0.05rem #689ed0 solid;
  border-radius: 4px;
  background-color: var(--color-light-background);
  overflow-y: scroll;
  overflow-x: hidden;
  //border: 1px solid red;

  h2 {
    color: #313131;
    margin-bottom: 1rem;
    font-weight: lighter;
  }
  .arrow {
    color: #313131;
    height: 40px;
    width: 40px;
    cursor: pointer;
  }
`;

const StyledHeaderSection = styled(motion.div)`
  grid-area: header;
  padding: 1rem;
  color: #313131;
`;

const StyledMain = styled(motion.div)`
  grid-area: main;
  display: flex;
  .left {
    color: #313131;
    border: 1px solid black;
    padding: 0rem 1rem 1rem 1rem;
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .middle {
    color: #313131;
    border: 1px solid black;
    flex: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    img {
      min-width: 10vw;
      max-height: 12vh;
      object-fit: cover;
      object-position: top;
      padding: 0rem 1rem 1rem 1rem;
      cursor: pointer;
    }
  }
  .right {
    color: #313131;
    border: 1px solid black;
    padding: 1rem;
    flex: 4;
    img {
      width: 100%;
      max-height: 60vh;
      object-fit: scale-down;
      object-position: top;
      padding: 0rem 1rem 1rem 1rem;
    }
  }
`;

const StyledHeaderIcons = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  .icon {
    height: 30px;
    width: 30px;
  }
`;
const StyledIcons = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
`;

const StyledLinks = styled(motion.div)`
  display: flex;
  //align-items: center;

  a {
    padding-right: 1rem;
    color: white;
    text-decoration: none;
    &:visited {
      color: white;
      text-decoration: none;
    }
  }
`;

const StyledLeftSection = styled(motion.div)`
  grid-area: left-side;
  display: flex;
  align-items: center;
`;

const StyledRightSection = styled(motion.div)`
  grid-area: right-side;
  justify-self: end;
  display: flex;
  align-items: center;
`;

export default ProjectDetails;
