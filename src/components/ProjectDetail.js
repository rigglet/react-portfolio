import { useEffect, useState } from "react";
//framer motion and styled components
import { motion } from "framer-motion";
import styled from "styled-components";

//functions
import { getIcon } from "../util";
import { FaWindowClose, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { getDocumentByID } from "../api/api";

const ProjectDetails = ({
  projectClose,
  skipProject,
  pathId,
  arrSize,
  handleImageChange,
  currentImage,
}) => {
  //const project = getProject(pathId);
  const [project, setProject] = useState({});

  useEffect(() => {
    async function getProject() {
      return await getDocumentByID("projects", pathId);
    }

    getProject().then((results) => {
      console.log(results);
      if (results.status === 200) {
        setProject(results.data);
      }
    });
  }, []);

  const handleClose = () => {
    projectClose();
  };

  // useEffect(() => {
  //   //console.log("useEffect");
  //   handleImageChange(getImage(project.screenshots[0].address));
  // }, []);

  return (
    <StyledDetail>
      <StyledCard>
        <StyledHeaderSection>
          <div className="closediv">
            <FaWindowClose className="close" onClick={handleClose} />
          </div>
          <h2>{project.projectName}</h2>
          <StyledHeaderIcons>
            <StyledLinks>
              <a href={project.www} target="_blank" rel="noreferrer">
                {getIcon("WEB")}
              </a>
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                {getIcon("GIT")}
              </a>
            </StyledLinks>
            {project.featured ? getIcon("STAR") : getIcon("ESTAR")}
          </StyledHeaderIcons>
        </StyledHeaderSection>

        <HLine />

        <StyledMain>
          <div className="left">
            <p>{project.projectDescription}</p>

            <StyledIcons>
              {project.technologies.map((tech) => (
                <p key={tech}>{getIcon(tech)}</p>
              ))}
            </StyledIcons>
          </div>

          <div className="middle">
            {project.screenshots.map((shot) => (
              <img
                src={shot.address}
                alt="screenshot"
                onClick={() => handleImageChange(shot.address)}
              />
            ))}
          </div>

          <div className="right">
            <img src={currentImage} alt="project" />
          </div>
        </StyledMain>

        <StyledLeftSection>
          {arrSize > 1 ? (
            <FaAngleLeft
              className="arrow"
              onClick={() => {
                skipProject("BACK");
              }}
            />
          ) : (
            ""
          )}
        </StyledLeftSection>

        <StyledRightSection>
          {arrSize > 1 ? (
            <FaAngleRight
              className="arrow"
              onClick={() => {
                skipProject("FORWARD");
              }}
            />
          ) : (
            ""
          )}
        </StyledRightSection>
      </StyledCard>
    </StyledDetail>
  );
};

const StyledDetail = styled(motion.div)`
  position: absolute;
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

  box-shadow: 0px 5px 20px rgba(255, 255, 255, 0.2);
  z-index: 10;
  width: 90vw;
  min-height: 85vh;
  max-height: 85vh;
  border: 0.05rem #689ed0 solid;
  border-radius: 1rem;
  //padding: 1rem 2rem;
  /* overflow-x: hidden; */
  background-color: black;

  h2 {
    margin-bottom: 1rem;
    font-weight: lighter;
  }
`;

const StyledHeaderSection = styled(motion.div)`
  grid-area: header;
  padding: 1rem;
  .closediv {
    position: relative;
    top: 0;
    left: 100%;
    padding: 0;
  }
`;

const StyledMain = styled(motion.div)`
  grid-area: main;
  display: flex;
  .left {
    padding: 0rem 1rem 1rem 1rem;
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .middle {
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

const HLine = styled(motion.div)`
  grid-area: line;
  width: 100%;
  height: 2px;
  margin: 1rem 0rem;
  border-radius: 50%;
  background: #689ed0;
`;

const StyledLeftSection = styled(motion.div)`
  grid-area: left-side;
  display: flex;
  align-items: center;
  .arrow {
    height: 40px;
    width: 40px;
    cursor: pointer;
  }
`;

const StyledRightSection = styled(motion.div)`
  grid-area: right-side;
  justify-self: end;
  display: flex;
  align-items: center;
  .arrow {
    height: 40px;
    width: 40px;
    cursor: pointer;
  }
`;

// const StyledGallery = styled(motion.div)`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
//   padding: 1rem 0rem;

/* img {
    //width: 50%;
    height: 10vh;
    object-fit: cover;
    object-position: center;
    padding: 0rem 0rem 0.5rem 0.5rem;
  } */
//`;

export default ProjectDetails;
